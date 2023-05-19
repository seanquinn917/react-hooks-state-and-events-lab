import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("")

function handleClick(e){
 
setSelectedCategory((selectedCategory)=> selectedCategory === e.target.value)
  
  const newList = items.filter((item) => selectedCategory === item.category);
  setSelectedCategory(newList)
  
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleClick}  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
          {items.map((item) => (
          <Item key={item.id}  name={item.name} category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
