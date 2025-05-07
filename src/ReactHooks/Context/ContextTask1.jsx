import React, { createContext, useContext } from "react";

const CreateTaskCon = createContext()

export default function ContextTask1(){
    const proVideData = "cvbn ulik werty"
    return (
        <div>
            <h1>ContextTask1</h1>
            <CreateTaskCon.Provider value={proVideData}>
                <Component />
            </CreateTaskCon.Provider>
        </div>
    )


}
function Component() {
    const use = useContext(CreateTaskCon)
    return (
        <div>
            <h1>Component</h1>
            <h1>{use}</h1>
        </div>
    )

}
// Here's a basic example of how to create a cart in React JS:

// Cart Component

// jsx
//  

// jsx
// import React from 'react';

// const Product = ({ product, addItemToCart }) => {
//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button onClick={() => addItemToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

// export default Product;


// App Component

// jsx
// import React, { useState } from 'react';
// import Cart from './Cart';
// import Product from './Product';

// const products = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 20 },
//   { id: 3, name: 'Product 3', price: 30 },
// ];

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = (item) => {
//     // Call the addItemToCart function from the Cart component
//     // and pass the item to be added
//   };

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <Product product={product} addItemToCart={addItemToCart} />
//           </li>
//         ))}
//       </ul>
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;


