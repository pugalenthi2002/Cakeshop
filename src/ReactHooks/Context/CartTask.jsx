import React, { useState } from 'react';
import img from '../../Image/lp1.jpg'
const products = [
  {
    id: 1,
    name: 'HP ',
    price: 300000,
    Image: ""
    // image: "src/Image/img1.jpg",
  },
  {
    id: 2,
    name: 'DELL ',
    price: 200000,
    Image: ""
    // image: "src/Image/img1.jpg",
  },
  {
    id: 3,
    name: 'LENOVO ',
    price: 100000,
    Image: ""
    // image: "src/Image/img1.jpg",
  },
];
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const addItemToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    calculateTotal();
  };
  const removeItemFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      setCartItems([...cartItems]);
    }
    calculateTotal();
  };
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredProducts(filtered);
  };
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid ">
          <a class="navbar-brand fs-1 text-warning fw-25">Amazon</a>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search your Products" aria-label="Find" />
            <button class="btn btn-success" type="submit">Search</button>
          </form>
          <div className="{img1}">
            <h2>Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  {item.name} x {item.quantity} = {item.price * item.quantity}
                  <button onClick={() => removeItemFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: {total}</p>
          </div>
        </div>
      </nav>
      <div className="products text-center mt-5 d-flex">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={img} className='' alt="" />
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addItemToCart(product)} class="btn-btn warning" type='submit'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;








