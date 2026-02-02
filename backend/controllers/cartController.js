import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
};

export const addToCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = await Cart.create({
      userId: req.user.id,
      items: [{ product: req.body.product, quantity: 1 }]
    });
  } else {
    cart.items.push({ product: req.body.product, quantity: 1 });
    await cart.save();
  }

  res.json(cart);
};
