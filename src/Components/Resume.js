import React, { Component } from "react";
import { Grid, Cell, ListItemContent } from "react-mdl";
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
              <img class= "col-8 col-lg-2 profile-picture  img-fluid"
                src="images/don5.jpeg"  
                alt="avatar"
                //style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Irakoze Don De Dieu</h2>
            <h4 style={{ color: "green" }}>Computer engineer</h4>
            <hr style={{ borderTop: "2px solid #3FA5B2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is Irakoze Don, i'm responsible,
              <br></br>
               Self-motivated and hard-working person.
              <br></br>

              I’m able to work well under pressure.
            </p>
            <hr style={{ borderTop: "2px solid #169987", width: "50%" }} />
            <h5 style={{ color: "green" }}>Address</h5>
            <p> City: Moscow </p>
            <p> ZIP: 123423 </p>


            <h5 style={{ color: "green" }}>Phone</h5>
            <p>+7 977 533-93-16</p>
            <h5 style={{ color: "green" }}> Find more about me</h5>
            <a class="button1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://cvversion1.vercel.app/"
            >
              HERE 
            </a>
            <h5 style={{ color: "green" }}>Download CV</h5>
            <a class="button1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/16okhqD1VmsrohnQuQNKxsuqHV_WTZl_9/view?usp=sharing"
            >
              My Update CV
            </a>
            <h5 style={{ color: "green" }}>Email</h5>
            <p><a class="button1" href="mailto:donir23197@gmail.com">donir23197@gmail.com</a></p>
           
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div class="button4">

            <h2 style={{ color: "green" }}>Experience</h2>
            <Experience
              startYear={"October 2018"}
              endYear={"Present"}
              jobName={"Web Developper "}
              companyName={"Metropolitan Coorporation"}
              jobDesc={
                [
                  "I am Irakoze Don, experienced member of the IT Domain with skills in onetime, devops and fullstake development",
                  "I create successful responsive websites that are fast, easy to use,and built with best practices.",
                  "The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins,features, animations, and coding interactive layouts.",
                  "I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) ."
                  
                  
                ]
              }
            />
            <Experience
              startYear={"May 2020"}
              endYear={"June 2020"}
              duration={2}
              jobName={"French High School (Server connection)"}
              companyName={"Office Skills"}
              jobDesc={[
                "Microsoft office Word , Microsoft office Excel",
                "JavaScript , Java",
                "C++ , C# ,   PHP",
                "1C",
                "MySQl"
              ]
              }
            />
            <Experience
              startYear={"JUN 2021"}
              endYear={"AUGUST 2021"}
              duration={3}
              jobName={"Software Developper"}
              companyName={"NatiFlanguage"}
              jobDesc={
                [
                  <ListItemContent>
                 <li>Customer service </li> 
                 <li>Identify, understand and analyze the specific needs of a potential client</li>
                 <li>Design and programming of a website, a module or a specific development</li>
                 <li>The ability to develop several verification tests</li>
                 <li>Attention to detail</li>
                 <li>Fix bugs</li>
                 <br></br>
                 "I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an fullstack development."

                  </ListItemContent>
                ]
              }
            />
             <Experience
              startYear={"May 2020"}
              endYear={"June 2020"}
              duration={2}
              jobName={"French High School (Server connection)"}
              companyName={"Office Skills"}
              jobDesc={[
                "Microsoft office Word , Microsoft office Excel",
                "JavaScript , Java",
                "C++ , C# ,   PHP",
                "1C",
                "MySQl"


            
              ]
              }
            />

            
            </div> 
          
            
           
         
            <div class="button5">

              <hr style={{ borderTop: "3px solid #0F7959" }} />
              <h2 style={{ color: "green" }} >Education</h2>
              <Education
                startYear={2018}
                endYear={2019}
                
                schoolName={"Московский энергетический институт (МЭИ)"}
                degreeName={"Russian Language"}
              />
              <Education
                startYear={2019}
                endYear={2023}
                schoolName={"Московский Технический Университет Связи и Информатики (МТУСИ)"}
                degreeName={"Informatics Sciences"}
              />


            </div>

            <div class="button2">
            <hr style={{ borderTop: "3px solid #136E57" }} />
            <h2 style={{ color: "green" }} >Skills</h2>
            <Skills skill={"Ms office"} progress={75} />
            <Skills skill={"java"} progress={71} />
            <Skills skill={"Python"} progress={70} />
            <Skills skill={"Mysql"} progress={74} />
            <Skills skill={"HTML"} progress={85} />
            <Skills skill={"CSS"} progress={81} />
            <Skills skill={"JavaScript"} progress={68} />
            <Skills skill={"TypeScript"} progress={75} />
            <Skills skill={"Scala"} progress={73} />
            <Skills skill={"BigData"} progress={68} />


            </div>
            
            
            <div class="button3"> 
              <hr style={{ borderTop: "3px solid #04A7AC" }} />
              <h2 style={{ color: "green" }} >Achievments</h2>
              <h6>Udemy's Certificate in Fullstake development (04/2021)</h6>
              <h6>3th place at typing Contest (09/2021)</h6>
              <h6>2th at communication skills Contest (04/2022)</h6>
              <h6>3th place at most topic intervention at community Skills conferences  (06/2022)</h6>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
