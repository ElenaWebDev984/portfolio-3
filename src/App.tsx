import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";



function App() {
    return (
        <div className="App">
            <Particle />
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}

export default App

// TODO Testimony, Contact - hidden???
// TODO About +/-