import { useEffect, useRef,useState } from "react";
import { Link} from "react-router-dom";
import ToasterUi from 'toaster-ui';
const Education = () => {
    let institute = useRef();
    let degree = useRef();
    let startYear = useRef();
    let endYear = useRef();
    let eduCity = useRef();
    let eduCountry = useRef();
   let  otherActivities = useRef();

   let [userDetails ,setUserDetails] = useState({});
   let [inputField , setInputField] = useState([{institue :'' , degree : '' ,city:'', country:'', sd:'',ed:'',activity:''}])

   const toaster = new ToasterUi();
   useEffect( ()=>{
    fetch("http://localhost:3000/information")
    .then((res) =>{
        return res.json()
    })
    .then( (dt) =>{
        console.log(dt);
    })
    let data = JSON.parse(localStorage.getItem("userdetails"))
    setUserDetails(data)

   },[])
   
   let handleAddEducation = (e)=>{
        e.preventDefault();
        toaster.addToast("Qualification details added successfully");
        let eduDetails = {

            institute :institute.current.value,
            degree : degree.current.value,
            startYear : startYear.current.value,
            endYear :endYear.current.value,
            eduCity :eduCity.current.value,
            eduCountry :eduCountry.current.value,
            otherActivities :otherActivities.current.value
        }
        // console.log(eduDetails);
        let data = JSON.parse(localStorage.getItem("userdetails"))
        console.log(data.education);
        let educationArr = data.education;
        educationArr.push(eduDetails)

        let updateEduData = {
            ...userDetails,education : [...userDetails.education,eduDetails]
        }
        let config ={
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body :JSON.stringify(updateEduData)
        }
        fetch("http://localhost:3000/information/" + userDetails,config)
        .then(()=>{
            localStorage.setItem("userdetails" ,JSON.stringify({...updateEduData}))
        })       
            }

   // add more education details
        
   let handleAddMoreDetals = (e) =>{
            e.preventDefault();
            // alert("add more details")
            setInputField([ ...inputField ,{institue :'' , degree : '' ,city:'', country:'', sd:'',ed:'',activity:''}] )
            toaster.addToast("Added successfully");
        }

    let handlInputChange = (e,index)=>{
        const {name, value} = e.target;
        const list = [...inputField];
        list[index][name] = value;
        setInputField(list)
    }
//remove education details
const handleRemovedetails = index =>{
    const list = [...inputField];
    list.splice(index,1);
    setInputField(list)
    toaster.addToast("Removed successfully");
}

    return ( 
        <div className="edu-page">
            <h3> Tell us about your Qualification </h3>

            <div className="edu-info">
                { inputField.map( (x,i)=>{
                    return (
                    <form className="row g-3" onSubmit={handleAddEducation} >
                    
                    <div className="col-md-6">
                        <label for="inputInstitute" className="form-label"> Institute</label>
                        <input type="text" className="form-control" id="inputInstitute" placeholder= "e.g. Saint jonh's school" 
                        ref={institute} required name="institue" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputDegree" className="form-label">Degree</label>
                        <input type="text" className="form-control" id="inputDegree" placeholder="e.g. Bachelor's of ARTs"
                             ref={degree} required name="degree" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" ref={eduCity} required 
                        name="city" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCountry" className="form-label">Country</label>
                        <input type="text" className="form-control" id="inputCountry" ref={eduCountry}
                         required name="country" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputStartDate" className="form-label"> Start Date </label>
                        <input type="date" className="form-control" id="inputStartDate" aria-label="start date" 
                        ref={startYear} required name="sd" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputEndDate" className="form-label"> End Date</label>
                        <input type="date" className="form-control" id="inputEndDate" aria-label="end date" 
                        ref={endYear} required name="ed" onChange={e =>handlInputChange(e,i)}/>
                    </div>
                    <div className="mb-3">
                        <label for="otherActivities" className="form-label"> Other Activities</label>
                        <textarea className="form-control" id="otherActivities" rows="5" name="activity"
                         ref={otherActivities} onChange={e =>handlInputChange(e,i)}></textarea>
                    </div>
 
                        {/* ---------add more button nd collapse */}
                        <div class="d-flex justify-content-center">

                            {
                                inputField.length !==1 &&
                                <button type="button" class="btn btn-outline-danger" onClick={()=>handleRemovedetails(i)}>remove</button>
                            }
                            { inputField.length-1 === i &&
                                <button type="button" class="btn btn-outline-dark" onClick={handleAddMoreDetals}>Add </button>
                            }
                            
                            
                        </div>
                        
                    <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Save</button>
                    </div>
 
                </form>
                 )
                })
}
                
                <div class="d-flex justify-content-between" id="options">
                    <Link to='/skills' ><button type="button" class="btn btn-outline-info">BACK</button> </Link> 
                    <Link to='/experience'><button type="button" class="btn btn-warning"> NEXT : Work history</button> </Link>
                </div>
            </div>

            
            {/* <div className="view-resume">
                <Link to='/cvTemplate'> View Resume</Link>
            </div> */}
        </div>
     );
}
 
export default Education;