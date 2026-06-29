export const authenticate = (_req, _res, next) => {
  // Placeholder — verify JWT token
  next();
};

export const authorize = (...roles) => (req, _res, next) => {
  // Placeholder — check user roles
  req.authorizedRoles = roles;
  next();
};

export default authenticate;
