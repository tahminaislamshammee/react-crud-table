import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const RockContext = createContext();

const RockContextProvider = (props) => {

    const [rock, setRock] = useState([
        {id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@gmail.com', address: 'xyz'},
        {id: uuidv4(), name: 'Mario', email: 'thomashardy@gmail.com', address: 'xyz'},
        {id: uuidv4(), name: 'yoshi', email: 'thomashardy@gmail.com', address: 'xyz'},
        {id: uuidv4(), name: 'Martin', email: 'thomashardy@gmail.com', address: 'xyz'}
    ]);

    const addNewRock = (name, email, address) =>{
        setRock([...rock, {id: uuidv4(), name, email, address}]);
    }

    const deleteRock = (id) => {
        setRock(rock.filter(item => item.id !=id))
    }

    const updateRock = (id, updatedRock) => {
        setRock(rock.map((item)=>item.id === id ? updatedRock : item))
    }

    return ( 
        <RockContext.Provider value={{rock, addNewRock, deleteRock, updateRock}}>
            {props.children}
        </RockContext.Provider>
    );
}
 
export default RockContextProvider;