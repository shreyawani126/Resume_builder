import { Link  } from "react-router-dom";
const Navbar = () => {
    return (        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div id="logo" class="container-fluid" >
            <Link to='/'> <h1> zetp</h1><i class='bx bxs-zap'></i></Link> 
          
            </div>
            
        </nav>
     );
}
 
export default Navbar;