import React,{useState, useContext} from 'react';
import Header from './Componenet/Header/Header';
import './App.css';
import Seller from './Componenet/Seller/Seller';
import Items from './Componenet/Items/Items';
import Cart from './Componenet/Cart/Cart';
import Context from './Store/auth-context';


function App() {
  const [showcart, setShowcart]=useState(false);
  const ctx = useContext(Context)
  const showcartinterface = ()=>{
    setShowcart(true)
  }
  const hidecartinterface = ()=>{
    setShowcart(false)
  }
  return (
    <div>
      {showcart && <Cart close={hidecartinterface}/> }
      
      <Header show={showcartinterface}/>
      <Seller/>
      
      <Items/>
    </div>
  );
}

export default App;
