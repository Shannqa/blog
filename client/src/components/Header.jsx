import { useContext } from "react";
import { Link } from "react-router-dom";
import Account from "./Account.jsx";
import { AppContext } from "./Root.jsx";
import Logout from "./Logout.jsx";
import AddPost from "./AddPost.jsx";
import styles from "../styles/Header.module.css";

function Header() {
  const { user, setUser } = useContext(AppContext);

  return (
    <div className={styles.header}>
      <h1>
        <Link to="/">
          <img src="../public/img/logo.png" />
        </Link>
      </h1>
      <div className="buttons-container">
        {user ? (
          <>
            <Link to="account" className="button">
              Your account
            </Link>
            <Logout />
            <Link to="posts/add" className="button">
              Add post
            </Link>
          </>
        ) : (
          <>
            <Link className="button" to="signup">
              Sign up
            </Link>
            <Link className="button" to="login">
              Log in
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// import { useMediaQuery } from "react-responsive";
// import styles from "../styles/Header.module.css";

// function Header() {
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   // const { userCart, categories } = useContext(ShopContext);

//   return(
//     <div className={styles.header}>
//       {isMobile ? <MobileMenu categories={categories} userCart={userCart} /> : <BrowserMenu categories={categories} userCart={userCart} />}
//     </div>
//   )
// }

// function MobileMenu() {
//   const { userCart, categories } = useContext(ShopContext);

//   function openCloseMenu() {
//     const menu = document.querySelector(`.${styles.mobileMenuList}`);
//     const menuBtn = document.querySelector("#openClose");
//     if (menu.classList.contains(`${styles.visible}`)) {
//       menuBtn.src = "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
//       menu.classList.remove(`${styles.visible}`);
//     } else {
//       menu.classList.add(`${styles.visible}`);
//       menuBtn.src = "../assets/close_FILL0_wght400_GRAD0_opsz24.svg";
//     }
//   }

//   (function autoOpenClose() {
//     const menu = document.querySelector(`.${styles.mobileMenuList}`);
//     const links = document.querySelectorAll(`.${styles.mobileMenuList} a`);
//     const menuBtn = document.querySelector("#openClose");

//     if (links) {
//       links.forEach((a) => a.addEventListener("click", () => {
//         menuBtn.src = "../assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
//         menu.classList.remove(`${styles.visible}`);
//       }))
//     }
//   })();

//   return(
//     <div className={styles.mobileMenu}>
//       <div className={styles.mobileMenuBar}>
//         <img src="./assets/menu_FILL0_wght400_GRAD0_opsz24.svg" id="openClose" className={styles.mobileMenuBtn} onClick={openCloseMenu} />
//         <Link to={"/"} className={styles.logo}>
//           <img src="./assets/storefront_FILL0_wght400_GRAD0_opsz24.svg" />
//           <span>Curious Curiosities</span>
//         </Link>
//         <Link to="/cart" className={styles.menuCart}>
//           <img src="./assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" />
//           <span>({userCart.length})</span>
//         </Link>
//       </div>
//         <ul className={styles.mobileMenuList}>
//           <li><Link to={"/"}>Home</Link></li>
//           <li>Categories
//             <ul>
//             {categories.map((category, id) => (
//               <li key={id}>
//                 <Link to={"categories/" + category}>{category}</Link>
//               </li>
//             ))}
//             </ul>
//           </li>
//           <li><Link to={"/placeholder"}>Account</Link></li>
//           <li><Link to={"/cart"}>Your cart</Link></li>
//           <li><Link to={"/placeholder"}>Site info</Link></li>
//         </ul>
//     </div>
//   )
// }

// function BrowserMenu() {
//   const { userCart, categories } = useContext(ShopContext);

//     return(
//     <div className={styles.browserMenu}>
//       <Link to={"/"} className={styles.logo}>
//         <img src="./assets/storefront_FILL0_wght400_GRAD0_opsz24.svg" />
//         <span>Curious Curiosities</span>
//       </Link>
//       <div className={styles.right}>
//         <div className={styles.dropdownContainer}>
//           <div className={styles.menuLabel}>Categories</div>
//           <ul className={styles.browserMenuList}>
//             {categories.map((category, id) => (
//               <li key={id}>
//                 <Link to={"categories/" + category}>{category}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <img className={styles.menuAccount} src="./assets/person_FILL0_wght400_GRAD0_opsz24.svg" />
//         <Link to="/cart" className={styles.menuCart}>
//           <img src="./assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" />
//           <span>({userCart.length})</span>
//         </Link>
//       </div>
//     </div>
//   )
// }

export default Header;
