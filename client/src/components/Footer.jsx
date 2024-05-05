import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Created by Shannqa</p>
    </div>
  );
}

// function Footer() {

//   return(
//     <div className={styles.footer}>
//       <ul className={styles.leftColumn}>
//         <li><Link to={"/placeholder"}>Terms and conditions</Link></li>
//         <li><Link to={"/placeholder"}>Privacy policy</Link></li>
//         <li><Link to={"/placeholder"}>FAQ</Link></li>
//       </ul>
//       <ul className={styles.rightColumn}>
//         <li><Link to={"/placeholder"}>Contact</Link></li>
//         <li><Link to={"/placeholder"}>Delivery and returns</Link></li>
//         <li><Link to={"/placeholder"}>Gift cards</Link></li>
//       </ul>
//       <p className={styles.middle}>
//         <span>Created by <a href="https://shannqa.netlify.app/">Shannqa</a></span>
//         <span className={styles.separator}>||</span>
//         <span>Powered by <a href="https://fakestoreapi.com/">Fake Store API</a></span>
//         <span className={styles.separator}>||</span>
//         <span>Photos from <a href="https://unsplash.com">Unsplash</a></span></p>
//     </div>
//   )
// }

export default Footer;
