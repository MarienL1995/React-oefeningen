import './App.css';
import {CARS, NUMBER_DATA, PERSON_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";
import {Cities} from "./components/City";
import {citiesFromPersonData} from "./utilities/person_utilities";
import {EventDemo} from "./components/EventDemo";
import {StateDemo} from "./components/StateDemo";
import {useState} from "react";
import "./services/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonsFromDB} from "./components/PersonsFromDB";
import {CarsFromDB} from "./components/CarsFromDB"
import {MenuFromDB} from "./components/MenuFromDB";

function App() {

    return (
        <div>
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
            <Numbers numbers={NUMBER_DATA.filter(n => n > 6)} title="Numbers>6"/>
            <Numbers numbers={NUMBER_DATA.map(n => n * 2)} title="Numbers*2"/>
            <Cars cars={CARS} title="Auto's"/>
            <Persons persons={PERSON_DATA} title="Personen"/>
            <Persons persons={[...PERSON_DATA].sort((pl, pr) => pl.age - pr.age)} title="Personen volgens leeftijd"/>
            <Numbers numbers={PERSON_DATA.map(p => p.age)} title="Leeftijden van de Personen"/>
            <Numbers numbers={[...new Set(PERSON_DATA.map(p => p.age).sort((al, ar) => al - ar))]}
                     title="Leeftijden van de Personen gesorteerd"/>
            <Cities cities={[{name: "Antwerpen", numberOfPersons: 111}, {name: "Brussel", numberOfPersons: 32}]}
                    title="City test"/>
            <Cities cities={citiesFromPersonData(PERSON_DATA)} title="Cities"/>
            <EventDemo/>
            <StateDemo/>
            <PersonsFromDB />
            <CarsFromDB />
            <MenuFromDB />
        </div>
    );
}

export default App;
