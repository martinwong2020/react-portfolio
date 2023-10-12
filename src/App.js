
import Welcome from './components/welcome/Welcome';
import './App.css';
import Loading from './components/loading/Loading';
import { useEffect, useState ,useRef } from 'react';
import {forwardRef} from 'react';
import Light_bar from './components/light_bar/Light_bar';
import About_me from './components/about_me/About_me';
import Parallax from './components/parallax/Parallax';
import Parallax_1_img from "./images/car-automotive-lighting.jpg";
import Parallax_2_img from "./images/neon-ramen-shop.jpg";
import Path from './components/path/Path';
import Skills from './components/skills/Skills';
import Duo_display from './components/Duo_display.js/Duo_display';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  const welcomeRef = useRef(null);

  const [overflow_status,setOverflow_status]=useState(false);
  const change_overflow_state=(state)=>{
    setOverflow_status(state);
    console.log("inn",overflow_status);
  }
  const componentStyle={
    overflowY: overflow_status?'auto': 'hidden',
    
  }

  return (
    <div className="App" style={componentStyle}>
        <Loading welcomeRef={welcomeRef} change_state={change_overflow_state}/>
        <Welcome ref={welcomeRef}/>
        <Parallax background={Parallax_1_img}/>
        <About_me />
        <Parallax background={Parallax_2_img}/>
        <Skills />
        <Light_bar neon_color="yellow"/>
        <Duo_display />
        <Light_bar neon_color="green"/>
        {/* <Contact /> */}
        <Footer />
    </div>
  );
}

export default App;
