import { useEffect, useRef,useState } from "react";
import { Link } from "react-router-dom";
import ToasterUi from 'toaster-ui';
const Experience = () => {

    let designation = useRef();
    let companyName = useRef();
    let jobCity = useRef();
    let jobCountry = useRef();
    let jobStart = useRef();
    let jobEnd = useRef();
    let jobDescription= useRef();

    let [userDetails ,setUserDetails] = useState({});
    let [inputField , setInputField] = useState([{designation :'' , cName : '' ,jCity:'', jCountry:'', sd:'',ed:'' ,desc:''}])
    
    const toaster = new ToasterUi();
     
    useEffect( ()=>{
        fetch("http://localhost:3000/information/")
        .then((res)=>{
            return res.json()
        })
        .then((d) =>{
            console.log(d);
        })
        let data = JSON.parse(localStorage.getItem("userdetails"))
        setUserDetails(data);
    },[])

    let handleAddExperience = (e) =>{
        e.preventDefault()
        //  it is used to prevent auto reload
        toaster.addToast("Previous work details added successfully");
        let expDetails = {
            designation : designation.current.value,
            companyName : companyName.current.value,
            jobCity : jobCity.current.value,
            jobCountry : jobCountry.current.value,
            jobStart : jobStart.current.value,
            jobEnd : jobEnd.current.value,
            jobDescription: jobDescription.current.value
        }
        console.log(expDetails);

        let data = JSON.parse(localStorage.getItem("userdetails"))
        console.log(data.experiences);
        
        let experienceArr = data.experiences;
        experienceArr.push(expDetails)
        let updateExpData = {
            ...userDetails , experiences: [...userDetails.experiences , expDetails]
        }

        let config = {
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body :JSON.stringify(updateExpData)
          }
          fetch("http://localhost:3000/information/" + userDetails ,config)
          .then( ()=>{
            localStorage.setItem("userdetails" , JSON.stringify({...updateExpData}))
          
          })
        }

        // add more education details
        
   let handleAddMoreDetals = (e) =>{
    e.preventDefault();
    toaster.addToast("Added successfully");
    setInputField([ ...inputField ,{designation :'' , cName : '' ,jCity:'', jCountry:'', sd:'',ed:'' ,desc:''}] )
  
    }

    let handleInputChange = (e,index)=>{
    const {name, value} = e.target;
    const list = [...inputField];
    list[index][name] = value;
    setInputField(list)
    }
    //remove education details
    const handleRemovedetails = index =>{
    const list = [...inputField];
    list.splice(index,1);
    setInputField(list);
    toaster.addToast("Removed successfully");
    }

    return ( 
        <div className="exp-page">
            <h3>Tell us about your most recent job</h3>

        <div className="exp-info">
        { inputField.map( (x,i)=>{
                    return (
            <form class="row g-3" onSubmit={handleAddExperience}>
               
                <div className="col-md-6">
                    <label for="inputJobTitle" className="form-label"> Designation</label>
                    <input type="text" className="form-control" id="inputJobTitle" 
                    ref={designation} required name="designation" onChange={e =>{handleInputChange(e,i)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmployer" className="form-label">Employer</label>
                    <input type="text" className="form-control" id="inputEmployer" placeholder="e.g. H&M" 
                    ref={companyName} required name="cName" onChange={e =>{handleInputChange(e,i)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" 
                    ref={jobCity} required name="jCity" onChange={e =>{handleInputChange(e,i)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputCountry" className="form-label">Country</label>
                    <input type="text" className="form-control" id="inputCountry" 
                    ref={jobCountry} required name="jCountry" onChange={e =>{handleInputChange(e,i)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputStartDate" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="inputStartDate" aria-label="start date"
                     ref={jobStart} required name="sd"
                    onChange={e =>{handleInputChange(e,i)}}/>
                </div>
                <div className="col-md-6">
                    <label for="inputEndDate" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="inputEndDate" aria-label="end date"
                     ref={jobEnd} required name="ed"
                    onChange={e =>{handleInputChange(e,i)}}/>
                </div>

                <div className="mb-3">
                <label for="achievements" className="form-label"> Job Description</label>
                    <textarea className="form-control" id="achievements" rows="5"
                     ref={jobDescription} required name="desc"
                    onChange={e =>{handleInputChange(e,i)}}></textarea>
                </div>


                    <div class="d-flex justify-content-around">
                        {
                            inputField.length !==1 &&
                            <button type="button" class="btn btn-outline-danger" onClick={()=>handleRemovedetails(i)}> Remove </button>
                        }
                        { inputField.length-1 === i &&
                            <button type="button" class="btn btn-outline-dark" onClick={handleAddMoreDetals}> Add </button>
                        }
                    </div>
                <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Save</button>
                </div>
            </form>
            )
                })
}
            <div class="d-flex justify-content-around" id="options">     
                <Link to='/education' ><button type="button" class="btn btn-outline-info">BACK</button> </Link> 
                <Link to='/cvTemplate'><button type="button" class="btn btn-success"> Review Resume</button> </Link>
            </div>
        </div>
      
        </div>
     );
}
 
export default Experience;