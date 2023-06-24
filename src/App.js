import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './resume_components/Home'
import Navbar from './resume_components/Navbar';
import Heading from './resume_components/Heading';
import ResumeTemplate from './resume_components/ResumeTemplate';
import Education from './resume_components/Education';
import Experience from './resume_components/Experience';
import Skills from './resume_components/Skills';


function App() {
  return (

    <BrowserRouter>
     <div className="App">
     <Navbar/>
        <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/heading' element={<Heading/>}/>
            <Route path='/cvTemplate' element={<ResumeTemplate/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
     </div>
    </BrowserRouter>
   
  );
}

export default App;
