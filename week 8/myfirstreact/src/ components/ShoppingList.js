import Button from "./Button"
import React, { useState } from "react"



function ShoppingList({items}) {

const [listItems, setItem] = useState([]);
const [value, setValue] = useState("");
const [isHealthy, setHealthy] = useState(true);

function increase(index){
  const newArray = [...listItems];
  newArray[index].quantity++;
  setItem(newArray);
}

function decrease(index){
  const newArray = [...listItems];
  newArray[index].quantity--;
  setItem(newArray);
}

function submitHandler(event){
  
  let newItem = {name: value, quantity: 0, id: 1234, isHealthy: isHealthy}
  setItem([...listItems, newItem]);
  setValue("");
  setHealthy(false);
}



    return (
      <div className="list">
        {listItems.length===0 && <h2>No items yet</h2> }

        
        <label>
          New items:
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </label>
        <button onClick={submitHandler}>Submit!</button>

          <br/>

          <label>
          Or select from the list: 
          <select value={value} onChange={(e)=>setValue(e.target.value)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> 
          </label>

          <br/>

          <label>
          Healthy!
          <input
            name="isHealthy"
            type="checkbox"
            checked={isHealthy}
            onChange={(e)=>setHealthy(e.target.checked)} />
          </label>


        <ul>
          {listItems.map((item,index) => (
            <li className="task" key={item.id}>
              
              <span>{item.name}: {item.quantity} - {item.isHealthy.toString()} </span>
              <Button color="green" text="add" handler={()=> increase(index)}/>
              <Button color="red" text="remove" handler={()=> decrease(index)}/>
            </li>
            
          ))}
        </ul>
      </div>
    );
}


export default ShoppingList;
