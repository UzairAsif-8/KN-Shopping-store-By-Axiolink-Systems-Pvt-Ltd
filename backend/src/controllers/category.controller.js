const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getAll = notImplemented('Get categories');
export const getById = notImplemented('Get category');
export const getBySlug = notImplemented('Get category by slug');
