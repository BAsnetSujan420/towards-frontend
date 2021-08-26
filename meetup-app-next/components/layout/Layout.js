import Navbar from "./Navbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
