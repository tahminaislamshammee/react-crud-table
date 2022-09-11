import { Button } from "react-bootstrap";
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import { useContext, useEffect, useState } from "react";
import { RockContext } from "../Context/RockContext";
import {Modal} from 'react-bootstrap'
import EditForm from './EditForm';
import RockView from "./RockView";

const Rock = ({rock}) => {
    const {id, name, email,address} = rock;
    const {deleteRock} = useContext(RockContext);

    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);

    const handleShow = ()=>{
        setShow(true);
    }

    const handleClose = ()=>{
        setShow(false);
    }

    const handleView = (e)=> {
        setView(current=>!current);
        setShow(false);
    }

    const handleView2 = (e)=> {
        setView(current=>!current);
    }


    useEffect(()=>{
        handleClose();
    }, [rock])

    return ( 
        <>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>

            <td>
                <Button onClick={handleShow} className="btn text-warning">
                    <BiEdit/>
                </Button>
                {/* <Button onClick={()=>deleteRock(id)} className="btn text-danger">
                    <AiFillDelete/>
                </Button> */}
            </td>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Edit Rock</Modal.Title>
                    <Button onClick={handleView} className="btn text-warning">
                        <BiEdit/>
                    </Button>
                    <Button onClick={()=>deleteRock(id)} className="btn text-danger">
                        <AiFillDelete/>
                    </Button>
                </Modal.Header>

                <Modal.Body>
                    <EditForm rock={rock}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>

            <div className={(view ? 'd-block popup' : 'd-none popup')}>
                    <RockView rock={rock}/>
                <div >
                    <Button onClick={handleView2} variant="secondary">Close</Button>
                </div>
            </div>
        </>
    );
}
 
export default Rock;