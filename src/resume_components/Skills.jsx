// import '../styles/Skills.css'
import { useEffect, useRef,useState } from "react";
import { Link } from "react-router-dom";

const Skills = () => {

    let [searchword, setSearchword] = useState("html");
    let [skills , setSkills] = useState([]);
  
   let textArea = useRef();

    useEffect(()=>{
        fetch("http://localhost:3000/skills")
        .then((res)=>{
            return res.json()
        })
        .then((data) =>{

              let s = data.map((name)=>{ return name.skill})
                // console.log(s);
                let sp = s.filter((v,i,a)=>{ return (!a.includes(v , i+1))})
                setSkills(sp)
                // s.filter((v,i,a)=>{ return })
              localStorage.setItem("skillSet" , JSON.stringify(data))
        })   
    },[])
    const textAreaLimit = () =>{
        if( textArea.current.value.length >= 50)
        {
            alert(" Your have reached limitations of characters")            
        }      
    }
    return ( 
        <div className="skills-page">
            <h3> Tell us about your Personal developements skills</h3>
           
            <div className="skills-info">
                <form >
                    <label for="exampleFormControlTextarea1" class="form-label">
                            Add Skills</label>
                    <input class="form-control me-2" type="search" placeholder="type skills"
                     aria-label="Search" value={searchword} onChange={(e) =>{ setSearchword(e.target.value)}}/>
                   
                    <div class="mb-3" id="info">
                        <textarea class="form-control" id="textArea" 
                            rows="2" maxLength={50} ref={textArea} onChange={textAreaLimit} ></textarea>
                    </div>
                       
                    {   searchword !== "" &&
                    <div id="suggestion">
                        <ul>
                            {
                                skills.map((sk)=>{ 
                                    return ( 
                                        <li>{sk.skill}</li>
                                        )
                                        })
                            }
                        </ul>

                    </div>
                } 
                    
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Save</button>
                    </div>
                    
                </form>

            <div class="d-flex justify-content-between" id="options">
                    <Link to='/heading' ><button type="button" class="btn btn-outline-info">BACK</button> </Link> 
                    <Link to='/education'><button type="button" class="btn btn-warning"> NEXT : Education</button> </Link>
            </div>
        </div>
        </div>
     );
}
 
export default Skills;