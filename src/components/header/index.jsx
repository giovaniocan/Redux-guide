
import { useDispatch } from 'react-redux';
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";


import {loginUser, logoutUser} from '../../redux/user/actions'
import { rootReducer } from '../../redux/rootReducer';
import { selectProductsCount } from '../../redux/cart/cart.selectors';
=======
// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };


  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  const {products} = useSelector(rootReducer => rootReducer.cartReducer)

  const productsCount = useSelector(selectProductsCount)

  const dispatch =  useDispatch()

  function handleFunction(){
    dispatch(loginUser({name:'Giovani', age:19}))
  }


  function hanfleLogout(){
    dispatch(logoutUser())
  }


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>

      <Styles.Buttons >
        {currentUser ?
           <div onClick={hanfleLogout}>Logout</div> 
           :
            <div onClick={handleFunction}>Login</div>}
        <div onClick={handleCartClick}>Carrinho ({productsCount}) </div>

      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
