const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const register = notImplemented('Register');
export const login = notImplemented('Login');
export const logout = notImplemented('Logout');
export const getProfile = notImplemented('Get profile');
export const refreshToken = notImplemented('Refresh token');
export const forgotPassword = notImplemented('Forgot password');
export const resetPassword = notImplemented('Reset password');
