import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/shopping-cart.context";

import "./navigation-bar.styles.scss"

const NavigationBar = () =>{

    const { currentUser } = useContext(UserContext);
    const { cartState, setCartState } = useContext(CartContext);

    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/"><CrwnLogo className="logo"/></Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ? 
                     (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) :
                     (<Link className="nav-link" to="/auth">SIGN IN</Link>)
                    }
                    <CartIcon />
                </div>
                { cartState && <CartDropDown /> }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;