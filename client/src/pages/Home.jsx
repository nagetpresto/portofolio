import Banner from "../components/Banner";
import About from "../components/About";
import Portofolio from "../components/Portofolio";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
            <Banner/>
            <About/>
            <Portofolio/>
            <Project/>
            <ContactMe/>
        </>
    )
}

export default Home