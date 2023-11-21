import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useSelector } from "react-redux";



// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import {loginUser, logoutUser} from '../../redux/user/actions'

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const {currentUser} = useSelector(rootReducer => rootReducer.userReducer)
  console.log(currentUser)

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
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
