import { useEffect, useState } from "react";
// import ToasterUi from 'toaster-ui';
const ResumeTemplate = () => {
	 let [userDetails , setUserDetails]= useState(null)

	useEffect( ()=>{
		  let userDetails= JSON.parse(localStorage.getItem("userdetails"))
		 setUserDetails(userDetails)
	},[])
	return (  
		<div className="app">
		<div className="resume-wrapper">
			{/* <h1>Resume template</h1> */}
			<div class="shadow p-3 mb-5 bg-body-tertiary rounded" id="outlet">
				{
					userDetails && 
					<div className="resume-header">
						<div className="body-header">
							<h1> {userDetails.firstName} {userDetails.lastName}</h1>
							<p> {userDetails.City} , {userDetails.Country}  {userDetails.ZipCode}</p>
							<p> +91-{userDetails.PhoneNumber} {userDetails.EmailAddress} </p>
						</div>	
						<hr/>
						<div id="summary">
							<h3>PROFESSIONAL SUMMARY</h3>
							<p>{userDetails.Profession}</p>
						</div>
						
						<div id="skills">
							{/* skills list  */}
							<h3>SKILLS</h3>  						
							<p>html , css , javascript , react js , bootstrap 5 , github</p>
						</div>
					</div>
				}		
			<div id="resume-border">
				{userDetails &&
					<div className="exp-body">
						<h3> WORK HISTORY</h3>
						{
							userDetails.experiences.map( (exp) =>{
								return (
									<div className="company-details">
										<div>
											<h5> {exp.designation} | {exp.jobStart} to {exp.jobEnd}</h5>
											<h6>{exp.companyName} - {exp.jobCity},{exp.jobCountry}</h6>
											<p> {exp.jobDescription}</p>
										</div>
									</div>
								)
							})
						}
			
					</div>
			
				}
				{
					userDetails && 
					<div className="edu-body">
						<h3> EDUCATION </h3>
						{
							userDetails.education.map( (edu)=>{
								return (
									<div className="edu-details">
										
										<div>
											 <span> <h6> {edu.institute} - {edu.eduCity}, {edu.eduCountry} </h6></span>
											<p>{edu.degree} | {edu.endYear} </p>  

											<p> 
												{edu.otherActivities}
											</p>
										</div>
									</div>
								)
							})
						}						
					</div>
				}
						
			</div>
			</div>
		</div>
	</div>
	);
}
 
export default ResumeTemplate;