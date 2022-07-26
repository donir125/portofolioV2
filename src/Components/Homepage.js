import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/DSC_5211-00.jpg"
                alt="Ismail"
              />
            </div>
            <div className="banner-text">
              <h1>pharmacist</h1>
              <hr />
              <p>
                I am Nihorimbere Belyse, experienced member of the healthcare  with skills in time management and interpersonal communication
                ; I have extensive knowledge in filling prescriptions, reviewing medical history records and identifying potential drug interactions
                
              
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://facebook.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://twitter.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in//"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
