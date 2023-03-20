import './navigation.styles.scss';

import { Fragment } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { selectIsCartOpen } from '../../store/cart/cart.selectors';

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const user = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOutUser()
        navigate('/')
    }

    return(
        <Fragment>
            <div className="navigation-container">
                <Link to='/' className="logo-container">
                    <CrownLogo className="logo" />
                </Link>
                <div className="links-container">
                    <Link to='shop' className="nav-link">
                        Shop
                    </Link>
                    {
                        user
                        ?
                        <span className="nav-link" onClick={handleSignOut}>sign out</span>
                        :
                        <Link to='auth' className="nav-link">Sign In</Link>
                    }    
                    <CartIcon/>
                </div>
                {
                    isCartOpen
                    ?
                    <CartDropdown/>
                    :
                    null
                }
                
            </div>

            <Outlet/>
        </Fragment>
        
    )
}


export default Navigation;