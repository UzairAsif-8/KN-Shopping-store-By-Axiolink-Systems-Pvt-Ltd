const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getByProduct = notImplemented('Get reviews');
export const create = notImplemented('Create review');
export const update = notImplemented('Update review');
export const remove = notImplemented('Delete review');
