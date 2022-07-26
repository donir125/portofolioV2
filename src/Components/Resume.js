import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/DSC_5211-00.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Nihorimbere Belyse</h2>
            <h4 style={{ color: "grey" }}>Pharmacist</h4>
            <hr style={{ borderTop: "2px solid #3FA5B2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Nihorimbere Belyse. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure.
            </p>
            <hr style={{ borderTop: "2px solid #169987", width: "50%" }} />
            <h5>Address</h5>
            <p>Moscow </p>
            <h5>Phone</h5>
            <p>+7 930 965-63-34</p>
            <h5>Email</h5>
            <p>nihorimberebelyse2020@gmail.com</p>
            <h5>Ms office</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://www.office.com/"
            >
              Microsoft office word 
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1V5HaD1K4xJGXIoyvvItxXeOP_Xc4DRHo/view?usp=sharing"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"February 2022"}
              endYear={"Present"}
              jobName={"Pharmacist"}
              companyName={"Company pgirard"}
              jobDesc={
                [
                  "I am Nihorimbere Belyse, experienced member of the healthcare  with skills in time management and interpersonal communication",
                  "I have extensive knowledge in filling prescriptions, reviewing medical history records and identifying potential drug interactions",
                  "I’m passionate about making people feel better by providing them with quality care through medication therapy management.",
                  "As a skilled pharmaceutical technician I offer my expertise to help patients get back on their feet after surgery or injury while still ensuring safety protocols are met."
                  
                ]
              }
            />
            <Experience
              startYear={"may 2021"}
              endYear={"june 2021"}
              duration={2}
              jobName={"Internship (Remote)"}
              companyName={"Office Skills"}
              jobDesc={[
                "Microsoft office Word",
                "Microsoft office Excel"
                
              ]
              }
            />
            <Experience
              startYear={"December 2020"}
              endYear={"January 2021"}
              duration={2}
              jobName={"Intership"}
              companyName={"Emu"}
              jobDesc={
                [
                 "Customer service.", 
                 "Verbal and written communication.",
                 "Problem - solving and critical thinking.",
                 "Strong knowledge of medical and medication terminology.",
                  "Attention to detail.",
                  "I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an internship."]
              }
            />
           
         

            <hr style={{ borderTop: "3px solid #0F7959" }} />
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2020}
              schoolName={"рудн"}
              degreeName={"Pharmaceutical Sciences"}
            />
            <hr style={{ borderTop: "3px solid #136E57" }} />
            <h2>Skills</h2>
            <Skills skill={"Ms word"} progress={90} />
            <Skills skill={"Excel"} progress={80} />
            <Skills skill={"access"} progress={75} />
            <Skills skill={"OutLook"} progress={96} />
            
            <hr style={{ borderTop: "3px solid #04A7AC" }} />
            <h2>Achievments</h2>
            <h6>1th at  typing Contest (03/2021)</h6>
            <h6>2th  at communication skills Contest (04/2022)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
