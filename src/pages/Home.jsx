import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Banner from "../components/sections/Banner";
import Overview from "../components/sections/Overview";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import MobileMenu from "../components/layout/MobileMenu";
import Loader from "../components/utilities/Loader";

function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <main>
        <Banner />
        <Overview />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <Loader />
    </>
  );
}

export default Home;
