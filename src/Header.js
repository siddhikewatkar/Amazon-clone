import React from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import{Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
function Header() {

  // eslint-disable-next-line no-unused-vars
  const [{cart, user}, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="isidhid"/>
      </Link>

    
       <div className="header__search">
       <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon" />  
     </div>

     <div className="header__nav">
      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication}className="header__option">
          <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>

        <div className="header__option">
          {/*returns nd orders*/}
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          {/*your prime*/}
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionCart">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__CartCount">
            {cart?.length}
            </span>
        </div>
        </Link>

     </div>

    </div>
  )
}

export default Header
