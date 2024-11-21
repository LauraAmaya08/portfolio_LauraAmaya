import {React} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { About } from "./views/about";
import { Certifications } from "./views/certifications";
import { Services } from "./views/services";
import { Projects } from "./views/projects";
import { Contact } from "./views/contact";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/about" element= {<About/>}></Route>
        <Route path="/certifications" element= {<Certifications/>}></Route>
        <Route path="/services" element= {<Services/>}></Route>
        <Route path="/projects" element= {<Projects/>}></Route>
        <Route path="/contact" element= {<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
)
