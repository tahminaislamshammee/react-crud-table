import { useContext, useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { RockContext } from '../Context/RockContext';
const RockView = ({rock}) => {
     const id = rock.id;
    const[name,setName] = useState(rock.name);
    const[email,setEmail] = useState(rock.email);
    const[address,setAddress] = useState(rock.address);

    const {updateRock} = useContext(RockContext);

    const updatedRock = {id,name,email,address}

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateRock(id, updatedRock);
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="name" required name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control as="textarea" placeholder="address" rows={2} required name='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

      <Button variant="success" type="submit">
        Edit
      </Button>
    </Form>
    );
}
 
export default RockView;