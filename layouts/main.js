import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

export default ({ children }) => (
  <div>
    <Header />
    { children }
    <Footer />
  </div>
);
