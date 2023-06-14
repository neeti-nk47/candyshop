import React,{useContext} from "react";
import { Navbar, Container, Button } from "react-bootstrap";       
import Context from "../../Store/auth-context";

const Header = (props)=>{
const ctx= useContext(Context)
let numberofCartItem;
if(ctx.cartItems){

  numberofCartItem = ctx.cartItems.reduce((crtNumber,item,i)=>{
    console.log(crtNumber,i,typeof(crtNumber))
    return (crtNumber + item.quantity)
  },0)
}

    return(
        <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Candy Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={props.show}>Cart: <span>{numberofCartItem}</span></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    )
}
export default Header;