import React, { useContext } from "react";
import Context from "../../Store/auth-context";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import classes from './Item.module.css'

const Items = () => {
    const ctx = useContext(Context);
    console.log(ctx.candys)

    return (
        <div>
            <ul className={classes.ul}>

                {ctx.candys.map((item) => (
                    <li>
                        <h4>{item.candyname}</h4>
                        <div className={classes.child}>
                        <p>{item.discription}</p><span>rs<span className={classes.price}>{item.price}</span></span>
                        </div>
                        <div>
                        <Button onClick={()=>ctx.addtocart(item,1)} variant="info" className="m-1">Buy 1</Button>
                        <Button onClick={()=>ctx.addtocart(item,2)} variant="info" className="m-1">Buy 2</Button>
                        <Button onClick={()=>ctx.addtocart(item,3)} variant="info" className="m-1">Buy 3</Button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    )
}
export default Items;