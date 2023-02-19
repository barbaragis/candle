import React from 'react';
import { BsCart } from 'react-icons/bs';
import './styles.scss';

function CartWidget (){
    return(
        <a href="#" >
            <BsCart icon={ BsCart } className = "icon" />
            <span className="badge  ">1</span>
        </a>
    );
}

export default CartWidget;