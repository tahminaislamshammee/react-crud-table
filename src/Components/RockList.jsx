import Rock from "./Rock";
import { Table, Modal, Button, Row, NavLink, Col } from 'react-bootstrap';
import { useContext, useEffect, useState } from "react";
import { RockContext } from "../Context/RockContext";
import AddForm from "./AddForm";
import RockView from "./RockView";
import {AiFillPlusCircle, AiOutlinePlus} from 'react-icons/ai';
const RockList = () => {
    const {rock} = useContext(RockContext);
    const [show, setShow] = useState(false);
    const [showView, setShowView] =useState(false);
    const handleShow = ()=>{
        setShow(!show);
    }

    const handleClose = ()=>{
        setShow(false);
    }

    const handleModal =() =>{
        console.log('true');
    }

    useEffect(()=>{
        handleClose()
    },[rock])

    return ( 
        <>
        <div className="table-title">
            <Row>
                <Col>
                    <h2>Manage Rocks</h2>
                </Col>
                <Col className="text-end">
                    <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">
                            <i>
                            <AiFillPlusCircle/>
                            </i>
                            add new rock
                    </Button>
                </Col>
            </Row>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>name</th>
                <th>email</th>
                <th>address</th>
                <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {rock.map((item)=>(
                    <tr key={item.id} onClick={handleModal}>
                       <Rock rock={item}/>
                    </tr>
                ))}       
            </tbody>
        </Table>
        <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AddForm/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>
        

        {/* <div className={(view ? 'd-block popup' : 'd-none popup')}>
                <div>
                    <EditForm rock={rock}/>
                </div>
                <div >
                    <Button onClick={handleModal} variant="secondary">Close</Button>
                </div>
        </div> */}
        </>

     );
}
 
export default RockList;