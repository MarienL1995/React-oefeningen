import {useEffect, useState} from "react";
import {Persons} from "./Person";
import {getCollection, getPersonsFromDb} from "../services/firestoreGetCollection";
import {Button} from "react-bootstrap";

export function PersonsFromDB(){
    const [persons,setPersons] = useState([])
    async function loadPersons(){
        const result = await getCollection("Persons")
        return setPersons(result)
    }
    useEffect(() => {
        loadPersons()
    },[])
    return <><Button onClick={ () =>(loadPersons())}>
        Load
    </Button> <Persons persons = {persons} title = "TestDB">

    </Persons></>
}
