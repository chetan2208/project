import Banner from "../Body/Banner/Banner";
import Footer from "../Body/Footer/Footer";
import MiddleLayer from "../Body/MiddleLayer/MiddleLayer";
import NavBar from "../Body/NavBar/NavBar";

function MainPage() {
    return ( 
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <MiddleLayer></MiddleLayer>
            <Footer></Footer>
        </>
     );
}

export default MainPage;