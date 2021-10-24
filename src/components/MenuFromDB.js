import {useEffect, useState} from "react";
import {getCollection} from "../services/firestoreGetCollection";
import {Button} from "react-bootstrap";
import {Card} from "./Card";
import {Section} from "./Section";

export function MenuFromDB() {
    const [menu, setMenu] = useState([])

    async function loadMenu() {
        const result = await getCollection("Products")
        return setMenu(result)
    }

    useEffect(() => {
        loadMenu()
    }, [])
    return <><Button onClick={() => (loadMenu())}>
        Load
    </Button>
        {menu.map((item) => <Card title= {item.name}
        >
            <p>Price : {item.price}</p>
            {item.category && <p>{item.category}</p>}
            {item.note && <p>{item.note}</p>}
            {item.size && <p>{item.size}</p>}
        </Card>)}
    </>
}
