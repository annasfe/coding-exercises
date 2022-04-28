import ShoppingList from './ components/ShoppingList';
import Header from './ components/Header';


function App () {
  let superObject = [
    {id: 10, name: "butter", quantity: 0}, 
    {id: 11, name: "milk", quantity: 0}, 
    {id: 12, name: "eggs", quantity: 0}
  ];

    return (
      <>
      <Header />
      <div className="container">
        <ShoppingList items={superObject}/>		
      </div>
      </>	  
    )
}

export default App;





