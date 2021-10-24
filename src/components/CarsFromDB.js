import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Cars} from "./Cars";
import {getCollection} from "../services/firestoreGetCollection";

export function CarsFromDB(){
    const [cars,setCars] = useState([]);
    async function loadCars(){
        const result = await getCollection("Cars");
        return setCars(result);
    }
    useEffect(() =>{
        loadCars()
    },[])
    return <><Button onClick={ () =>(loadCars())}>
        Load
    </Button> <Cars cars = {cars} title = "TestDBCars">

    </Cars></>
}