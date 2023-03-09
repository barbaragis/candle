import React  from "react";

export const ItemDetail  = ({data}) => {
    return (
        <div>
            <img src={data}/>
            <h1> {data} </h1>
        </div>
    );
}

export default ItemDetail;