import React from 'react';
import { BsCart } from 'react-icons/bs';
import './styles.scss';
import { Link } from 'react-router-dom';

function CartWidget (){
    return(
        <Link to='/cart'>
            <BsCart icon={ BsCart } className = "icon" />
            <span className="badge  "> 1</span>
        </Link>
    );
}

export default CartWidget;