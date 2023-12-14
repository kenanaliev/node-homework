const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 8000;

let products = [
  {
    id: 1,
    name: "Alma",
    price: 3,
    info: "Quba Almasi",
    image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg",
  },
  {
    id: 2,
    name: "Alca",
    price: 4,
    info: "Goyce alcasi",
    image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg",
  },
  {
    id: 3,
    name: "Kartof",
    price: 5,
    info: "Celilabad kartofu",
    image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg",
  },
];

//Get All Products
app.get("/", (req, res) => {
  res.send(products);
});

//Get Product by Id
app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const findProduct = products.find((x) => x.id === +id);
  if (findProduct) {
    res.send(findProduct);
  }
});

//Delete Product
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const findProductId = products.find((x) => x.id !== +id);
  if (findProductId) {
    products = products.filter((x) => x.id !== +id);
  }
});

//Add product
app.put("/", (req, res) => {
  products.push({
    id: counter++,
    ...req.body,
  });
});

//Updated product
app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const updatedProductIndex = products.findIndex((x) => x.id === +id);
  products[updatedProductIndex] = {
    id: counter++,
    ...req.body,
  };
  res.send(products);
});

//Run Server
app.listen(PORT, () => {
  console.log("Server is running");
});
