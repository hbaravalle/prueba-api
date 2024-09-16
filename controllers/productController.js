async function create(req, res) {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      detail: req.body.detail,
      price: req.body.price,
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.json("Server error");
  }
}

export default { create };
