import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
  try {
    // Ensure 'products.productId' is the correct reference based on your schema
    const cart = await Cart.findOne({ userId: req.user.id }).populate(
      "items.productId"
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Ensure userId is fetched from the authenticated user
    if (!userId || !productId || !quantity) {
      return res
        .status(400)
        .json({ message: "User ID, Product ID, and Quantity are required" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      // Item exists, update quantity
      cart.items[itemIndex].quantity += quantity;
    } else {
      // New item, add to cart
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
