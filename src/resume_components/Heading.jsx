import { useRef  } from "react";
import { Link } from "react-router-dom";
import ToasterUi from 'toaster-ui';
const Heading = () => {
    let firstname = useRef();
    let lastname = useRef();
    let profession =useRef();
    let email =useRef();
    let phone =useRef();
    let address =useRef();
    let city = useRef();
    let country = useRef();
    let zipcode= useRef();
    let profileSummury = useRef();

    // let navigate = useNavigate();
    
    let toaster = new ToasterUi();
    let  handleHeadings  = (e) =>{
        e.preventDefault()
        
       let newUserDetails = {
            firstName :firstname.current.value,
            lastName:lastname.current.value,
            Profession:profession.current.value,
            EmailAddress:email.current.value,
            PhoneNumber:phone.current.value,
            Address:address.current.value,
            City:city.current.value,
            Country:country.current.value,
            ZipCode:zipcode.current.value,
            ProfileSummary:profileSummury.current.value,
            experiences : [],
            education : []
           
       }
       console.log(newUserDetails);       
       localStorage.setItem("userdetails",JSON.stringify(newUserDetails));
       toaster.addToast("Details added successfully")
       //    navigate("/education");
    }

    return ( 
    <div className="heading-page">
        <h3>What is the best approach for employers to get <br/>in touch with you?</h3>

          <div className=" heading-info">
            <form className="row g-3" onSubmit={handleHeadings}>
                <div className="col-md-6">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" required ref={firstname}/>
                <div className="valid-feedback">
                    Looks good!
                </div>
                </div>
                <div className="col-md-6">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" required ref={lastname}/>
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-12">
                    <label for="inputProfession" className="form-label">Profession</label>
                    <input type="text" className="form-control" id="inputProfession" placeholder="e.g. job role" required ref={profession}/>
                    <div className="invalid-feedback">
                    Please provide a valid profession.
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="e.g. name@gmail.com " required ref={email}/>
                    <div className="invalid-feedback">
                    Please provide a valid email address.
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="inputPhone" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" id="inputPhone" maxlength="10" minlength="10" required ref={phone}/>
                    <div className="invalid-feedback">
                    Please provide a valid contact number.
                    </div>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="e.g, #301 house name, Area" required ref={address}/>
                    <div className="invalid-feedback">
                    Please provide a valid address.
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationCustom03" class="form-label">City</label>
                    <input type="text" class="form-control" id="validationCustom03" required ref={city}/>
                    <div class="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom04" className="form-label">Country</label>
                    <input type="text" className="form-control" id="validationCustom04" required ref={country}/>
                    <div className="invalid-feedback">
                    Please select a valid country.
                    </div>
                </div>
                <div className="col-md-3">
                    <label for="validationCustom05" className="form-label">Zip-Code</label>
                    <input type="text" className="form-control" id="validationCustom05" required ref={zipcode}/>
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="professionalSummary" className="form-label"> Professional Summary</label>
                        <textarea className="form-control" id="professionalSummary" rows="4" ref={profileSummury}></textarea>
                </div>
                {/* <div className="mb-3">
                    <label for="skills" className="form-label"> Professional Summary</label>
                        <textarea className="form-control" id="professionalSummary" rows="4" ref={profileSummury}></textarea>
                </div> */}
                 
                <div class="d-inline-flex p-2">
                <button type="submit" class="btn btn-primary mb-3">Save</button>
                </div>
                
            </form>
            <div class="d-flex justify-content-between" id="options">
                <Link to='/' ><button type="button" class="btn btn-outline-info">BACK</button> </Link> 
                <Link to='/skills'><button type="button" class="btn btn-warning">NEXT : Skills</button> </Link>
            </div>

        </div>
       
        {/* <div className="view-resume">
            <Link to='/cvTemplate'> View Resume</Link>
        </div> */}

    </div> );
}
 
export default Heading;