const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getCart = notImplemented('Get cart');
export const addItem = notImplemented('Add cart item');
export const updateItem = notImplemented('Update cart item');
export const removeItem = notImplemented('Remove cart item');
export const clearCart = notImplemented('Clear cart');
