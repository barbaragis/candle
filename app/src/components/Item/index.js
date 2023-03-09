import React from "react";
import './styles.scss';
import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="productos">
            <img src= {info.imagen} alt="" />
            <p> {info.nombre}</p>
        </Link>
    )
}

export default Item;