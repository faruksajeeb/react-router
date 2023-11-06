import { useRef,useState,useEffect } from "react";
import {BrowserRouter,HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Service from './pages/Service';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';

const App = () => {
    const myHeadline = useRef();
    const change = () => {
        myHeadline.current.innerText = 'Hello React!'
    }

    const [number,setNumber] = useState(0);

    useEffect(()=>{
        console.log('Changed!');
    },[3]);

    return (
        <div >  
            
            <h1 ref={myHeadline}></h1>
            <button className="btn btn-primary" onClick={change}>Click Me check Use Ref</button> 


            <h1>Number : {number}</h1>
            <button className="btn btn-danger" onClick={()=>setNumber(number+1)}>Increment++</button>

                    {/* <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter> */}
            <HashRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </HashRouter>  

            
        </div>
    );
};

export default App;