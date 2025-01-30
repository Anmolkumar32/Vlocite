import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={styles.navbar}>
            <img src="" alt="Logo" style={styles.image} />
      <h2>Nupur|LifeStyle|Food</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/vlogs" style={styles.link}>Vlogs</Link>
        <Link to="/extras" style={styles.link}>Extras</Link>
      </div>
    </nav>
  );
};

const styles = {
  Image: { width: "100%", height: "auto" },
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" },
  link: { margin: "0 10px", color: "white", textDecoration: "none" }
};

export default Header;
