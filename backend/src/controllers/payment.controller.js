const notImplemented = (name) => (_req, res) => {
  res.status(501).json({ success: false, message: `${name} not implemented yet` });
};

export const createIntent = notImplemented('Create payment intent');
export const confirmPayment = notImplemented('Confirm payment');
export const getMethods = notImplemented('Get payment methods');
