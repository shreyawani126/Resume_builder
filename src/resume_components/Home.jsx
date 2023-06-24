import { Link} from "react-router-dom";

const Home = () => {
    return (  
        <div id="home-page" class="container-fluid">
            <div id="content" class="container-fluid">     
                <p class="fs-1">Zetz. The Best CV <br/>Maker Online.</p>
                <p class="fw-normal">If a sheet of paper represents your entire work life, personality, and skills, 
                    it better be a pretty amazing piece of paper—
                    Let Zetz do the heavy lifting.</p>
                <Link to="/heading" id="create"> <button type="button" class="btn btn-success">Create your CV now </button> </Link>   
                
            </div>
            {/* <div className="image"> */}
            <div class="container-fluid" id="image">
                <img src="https://www.resume-now.com/wp-content/uploads/2023/05/template-banner.webp" class="img-fluid" alt="resume-template-iamge"></img>
            </div>
        </div>
        
     );
}
 
export default Home;