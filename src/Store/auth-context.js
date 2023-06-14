import React, { useEffect, useState } from "react";

const Context = React.createContext({
  candys: "",
  cartItems: "",
  addCandyshandler: "",
  addtocart: "",
  removeItem: "",
});

export const ContextProvider = (props) => {
  const [candys, setCandys] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getdataofcandys = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/8085641801614768a7f98ce7cc34ad41/candys"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }
      const data = await response.json();
      console.log("data while get", data);
      if (data) {
        setCandys(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getdataofcandys();
  }, []);

  const addCandyshandler = (item) => {
    setCandys([...candys, item]);
  };

  const postcandystodatabase = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/8085641801614768a7f98ce7cc34ad41/candys",
        {
          method: "PUT",
          body: JSON.stringify(candys),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }
      const data = await response.json();
      console.log("data while post", data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    postcandystodatabase();
  }, [candys]);

  const getdataofcartItems = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/8085641801614768a7f98ce7cc34ad41/cartItem"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }
      const data = await response.json();
      console.log("data while get", data);
      if (data) {
        setCartItems(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    getdataofcartItems();
  }, []);

  const postCarttodatabase = async () => {
    try {
      const response = await fetch(
        "https://crudcrud.com/api/8085641801614768a7f98ce7cc34ad41/cartItem",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }
      const data = await response.json();
      console.log("data while post", data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    postCarttodatabase();
  }, [cartItems]);

  const addtocart = (item, num) => {
    console.log("in addtocart", item, num, typeof num);
    const exsitingcandyIndex = cartItems.findIndex(
      (prevItem) => prevItem.id == item.id
    );
    const exstingcandy = cartItems[exsitingcandyIndex];
    console.log("exsistingcandy", exstingcandy);
    let updatedItems;
    if (exstingcandy) {
      let updatedItem = {
        ...exstingcandy,
        quantity: exstingcandy.quantity + num,
      };
      updatedItems = [...cartItems];
      updatedItems[exsitingcandyIndex] = updatedItem;
      setCartItems(updatedItems);
    } else {
      let newItem = { ...item, quantity: num };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItem = (id) => {
    const exsitingcandyIndex = cartItems.findIndex(
      (prevItem) => prevItem.id === id
    );
    const existingcandy = cartItems[exsitingcandyIndex];
    let updatedItems;
    if (existingcandy.quantity === 1) {
      updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
    } else {
      let updatedItem = {
        ...existingcandy,
        quantity: existingcandy.quantity - 1,
      };
      updatedItems = [...cartItems];
      updatedItems[exsitingcandyIndex] = updatedItem;
      setCartItems(updatedItems);
    }
  };

  console.log("cartItems", cartItems);
  const context = {
    candys: candys,
    cartItems: cartItems,
    addCandyshandler: addCandyshandler,
    addtocart: addtocart,
    removeItem: removeItem,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
