import { useContext, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { RockContext } from '../Context/RockContext';
const AddForm = () => {
    const {addNewRock} = useContext(RockContext);
    const [newRock, SetNewRock] = useState({
        name:"",
        email: "",
        address: ""
    });

    const onInputChange =(e)=>{
        SetNewRock({...newRock, [e.target.name]: e.target.value})
    }

    const {name, email, address} = newRock;

    const handleSubmit = (e)=>{
        e.preventDefault();
        addNewRock(name, email,address);
        
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="name" required value={name} onChange={(e)=> onInputChange(e)} name='name'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control as="textarea" placeholder="address" rows={2} required onChange={(e)=> onInputChange(e)} name='address'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="email"  onChange={(e)=> onInputChange(e)} name='email'/>
            </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    );
}
 
export default AddForm;