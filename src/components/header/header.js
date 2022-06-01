import React, { useContext } from 'react';
import CartContext from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assents/logo.svg';

import { Container, HeaderContainer, Cart } from './style';

function Header() {
    const { setState, state } = useContext(CartContext);

    const totalQuantity = state.cart.reduce(
        (acc, travel) => acc + travel.quantity,
        0,
    );
    return (
        <Container>
            <HeaderContainer>
                <Link to='/'>
                <img src={logo} alt='logo'/>
                </Link>
                <Link to='/cart'>
                <Cart>
                    <div>
                        <span>{totalQuantity}</span>
                    </div>
                    <FaShoppingCart size={36} color='#fff'/>
                </Cart>
                </Link> 
            </HeaderContainer>
        </Container>
    );
};

export default Header;