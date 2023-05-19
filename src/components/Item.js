import React, {useState} from "react";

function Item({ name, category }) {


  const [emptyCart, goShop] = useState(true)

  function change(){
    goShop(!emptyCart)
  }

  const appClass = emptyCart ? "Add to Cart" : "Remove From Cart" 
  const classyName = emptyCart ? "" : "in-cart"



  return (
    <li className={classyName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={change} className="add">{appClass}</button>
    </li>
  );
}

export default Item;
