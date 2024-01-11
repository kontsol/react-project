// import {Navbar, Main, About, CTA, Footer, Reviews} from "./components";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import {styles} from "./styles";
import {useState} from "react";
import {data} from "autoprefixer";

function App() {
  const [active, setActive] = useState(false);

  const dataUpdate = (newData) => {
    setActive(newData);
  };

  return (
    <main className={`relative  z-10 ${active ? "bg-[#00000081]" : ""}`}>
      {" "}
      <section className={`w-[80%] m-auto`}>
        {/* <img
        src="/images/bg-simplify-section-desktop.svg"
        className="absolute z-0 bg-blue-200 top-10 right-0"
      /> */}
        <Navbar onDataUpdate={dataUpdate} />
        <Main />
        <About />
        <Reviews />
      </section>
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
