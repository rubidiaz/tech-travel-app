import React, { useContext} from 'react';
import CartContext from '../../../context/cartContext';
import { MdDelete } from 'react-icons/md';
import { Container, ContainerList, TravelItem, Info, Quantity, Subtotal, Total } from './style-cart';
 
function Cart () {
  const { state, setState } = useContext(CartContext);

  const sumaTotal = state.cart.reduce(
    (acc, travel) => acc + travel.price * travel.quantity, 0 );

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.title} />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type='number' value={el.quantity} />
            <Subtotal>
              <p>{el.price + el.quantity}</p>
              <button type='button'>
                <MdDelete size={24} color='#0676d9' />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
      <Total>
      <div>
      <h1>TOTAL</h1>
      <strong>{sumaTotal}</strong>
      </div>
      </Total>
      </ContainerList>
      
    </Container>
    
  );
}

export default Cart