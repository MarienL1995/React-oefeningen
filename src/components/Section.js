import {Button,Collapse} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {children, title} = props;
    const [open, setOpen] = useState(false);
    return <div className="section">
        <button
            onClick={(e) => alert(`hallo (${e.clientX}, ${e.clientY})`)}>
            klik
        </button>
        <Button onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
        >{open ? "Close" : "Open"}</Button>
        <h3>{title}</h3>
        {children}

    </div>;
}

