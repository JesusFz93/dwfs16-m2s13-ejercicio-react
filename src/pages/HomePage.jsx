import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header titulo="Home Page" fruta="Mango" />
      <div>HomePage</div>
      <Footer />
    </>
  );
};

export default HomePage;
