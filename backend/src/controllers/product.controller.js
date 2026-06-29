const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getAll = notImplemented('Get products');
export const getById = notImplemented('Get product');
export const getBySlug = notImplemented('Get product by slug');
export const getFeatured = notImplemented('Get featured products');
export const getBestSellers = notImplemented('Get best sellers');
export const search = notImplemented('Search products');
