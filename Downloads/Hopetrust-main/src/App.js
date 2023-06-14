// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Team from "./pages/Team"
import About from "./pages/About"

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = <Home/>      
      break;

    case "/Team":
      Component = <Team/>      
      break;  
    
    case "/About":
      Component = <About/>      
      break; 
  }
  return( 
    <>
  <Navbar/>
  {Component}
    </>
  )
}

export default App