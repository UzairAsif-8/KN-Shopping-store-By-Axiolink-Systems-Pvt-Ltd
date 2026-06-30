import crypto from 'crypto';
import env, { isDatabaseEnabled } from '../config/env.js';
import { getPrisma } from '../config/database.js';
import { ApiError } from '../utils/ApiError.js';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  getRefreshTokenExpiry,
} from '../utils/tokens.js';
import { dummyAdmin, dummyAuth } from '../data/dummyStore.js';
import bcrypt from 'bcryptjs';

const adminSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
};

export class AuthService {
  static async login({ email, password }) {
    if (!isDatabaseEnabled()) {
      dummyAuth.clearAdminTokens();
      const admin = dummyAuth.login({ email, password });

      const accessToken = signAccessToken({
        sub: admin.id,
        email: admin.email,
        role: admin.role,
      });

      const refreshToken = signRefreshToken({ sub: admin.id, jti: crypto.randomUUID() });
      dummyAuth.saveRefreshToken(refreshToken, admin.id);

      return { accessToken, refreshToken, admin };
    }

    const prisma = getPrisma();
    const admin = await prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      throw new ApiError(401, 'Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      throw new ApiError(401, 'Invalid email or password');
    }

    await prisma.refreshToken.deleteMany({ where: { adminId: admin.id } });

    const accessToken = signAccessToken({
      sub: admin.id,
      email: admin.email,
      role: admin.role,
    });

    const refreshToken = signRefreshToken({ sub: admin.id, jti: crypto.randomUUID() });

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        adminId: admin.id,
        expiresAt: getRefreshTokenExpiry(),
      },
    });

    const { password: _, ...safeAdmin } = admin;

    return { accessToken, refreshToken, admin: safeAdmin };
  }

  static async refresh(refreshToken) {
    if (!refreshToken) {
      throw new ApiError(401, 'Refresh token required');
    }

    let decoded;

    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch {
      throw new ApiError(401, 'Invalid refresh token');
    }

    if (!isDatabaseEnabled()) {
      const stored = dummyAuth.getRefreshToken(refreshToken);
      if (!stored) {
        throw new ApiError(401, 'Refresh token expired');
      }

      const accessToken = signAccessToken({
        sub: dummyAdmin.id,
        email: dummyAdmin.email,
        role: dummyAdmin.role,
      });

      return { accessToken, admin: dummyAdmin };
    }

    const prisma = getPrisma();
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { admin: true },
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      if (storedToken) {
        await prisma.refreshToken.delete({ where: { id: storedToken.id } });
      }
      throw new ApiError(401, 'Refresh token expired');
    }

    const accessToken = signAccessToken({
      sub: storedToken.admin.id,
      email: storedToken.admin.email,
      role: storedToken.admin.role,
    });

    return { accessToken, admin: storedToken.admin };
  }

  static async logout(refreshToken) {
    if (!isDatabaseEnabled()) {
      dummyAuth.deleteRefreshToken(refreshToken);
      return;
    }

    if (refreshToken) {
      await getPrisma().refreshToken.deleteMany({ where: { token: refreshToken } });
    }
  }

  static async getProfile(adminId) {
    if (!isDatabaseEnabled()) {
      if (adminId !== dummyAdmin.id) {
        throw new ApiError(404, 'Admin not found');
      }
      return dummyAdmin;
    }

    const admin = await getPrisma().admin.findUnique({
      where: { id: adminId },
      select: adminSelect,
    });

    if (!admin) {
      throw new ApiError(404, 'Admin not found');
    }

    return admin;
  }
}

export default AuthService;
