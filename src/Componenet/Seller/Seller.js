import React,{useRef, useContext, useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import Classes from './Seller.module.css'
import Context from '../../Store/auth-context';


const Seller = () => {
    const ctx = useContext(Context)
    const [showfarm, setShowfarm]=useState(false);
    const CandyName=useRef();
    const Discription=useRef();
    const Price = useRef();

    const submithandler=(e)=>{
        e.preventDefault();
        const candys = {
            id:Math.random(),
            candyname : CandyName.current.value,
            discription: Discription.current.value,
            price : Number(Price.current.value),
        }
        console.log(candys)
        ctx.addCandyshandler(candys)
    }
    const formhandler = ()=>{
        if(showfarm){
            setShowfarm(false)
        }
        else{
            setShowfarm(true)
        }
    }
    return (
        <div className={Classes.container}>
            
            <Form onSubmit={submithandler}>
                <p>For Seller*</p>
                {showfarm && <>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Candy Name</Form.Label>
                    <Form.Control type="text" ref={CandyName} placeholder="Enter name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" ref={Discription} placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" min='0' ref={Price} placeholder="Enter description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </>}
                <div>
                <Button className='mt-3 btn-block' onClick={formhandler}>{showfarm ? 'Cancel':'Add Candy'}</Button>
                </div>
            </Form>
        </div>
    )
}
export default Seller;