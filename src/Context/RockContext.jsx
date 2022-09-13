import { useEffect } from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const RockContext = createContext();
 
const RockContextProvider = (props) => {

    const [rock, setRock] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/rock')
        .then(res=>{
            return res.json()
        })
        .then((data)=>{
            setRock(data);
        })
    },[])

    console.log(rock);

    const addNewRock = (name, email, address) =>{
        setRock([...rock, {id: uuidv4(), name, email, address}]);

        const newRock = {name,email,address}

        fetch('http://localhost:8000/rock',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newRock)
        }).then(()=>{
            console.log('new blog added');
        })
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