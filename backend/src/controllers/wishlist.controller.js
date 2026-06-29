const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getWishlist = notImplemented('Get wishlist');
export const addItem = notImplemented('Add wishlist item');
export const removeItem = notImplemented('Remove wishlist item');
export const clearWishlist = notImplemented('Clear wishlist');
