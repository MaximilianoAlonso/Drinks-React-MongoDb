import { Container } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import style from "./index.module.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
  return (
    <div className={style.main}>
      <Header />
        <Container className="mt-5">
        {children}
        
        </Container>
      <Footer />
    </div>
  );
};
MainLayout.protoTypes = {
  children : PropTypes.node.isRequired
}
