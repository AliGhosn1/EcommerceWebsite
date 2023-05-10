import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/shopping-cart.context";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation-bar.styles.jsx"

const NavigationBar = () =>{

    const { currentUser } = useContext(UserContext);
    const { cartState, setCartState } = useContext(CartContext);

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/"><CrwnLogo className="logo"/></LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? 
                     (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) :
                     (<NavLink to="/auth">SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                { cartState && <CartDropDown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;