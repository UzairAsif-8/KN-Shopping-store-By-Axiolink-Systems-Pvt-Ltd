const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const getAll = notImplemented('Get orders');
export const getById = notImplemented('Get order');
export const create = notImplemented('Create order');
export const cancel = notImplemented('Cancel order');
