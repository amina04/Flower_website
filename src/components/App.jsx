import React from "react";
import Title_sec from "./sections/Title_sec";
import AboutUs from "./sections/AboutUs";
import OurProduct from "./sections/OurProduct";
import Colurful from "./sections/Colurful";
import Footer from "./sections/Footer";
import OurBlog from "./sections/OurBlog";
function App(){
    return <div>
        <Title_sec/>
        <AboutUs/>
        <OurProduct/>
        <Colurful/>
        <OurBlog />
        <Footer/>

    </div>;
}
export default App;