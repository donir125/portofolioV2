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
                src="images/don3.jpg"
                alt="Ambass"
              />
            </div>
            <div className="banner-text">
              <h1> ******</h1>
               <hr />
               
              <p>
              Hello! My name is Irakoze Don and I enjoy creating things that live on the internet. My interest in web development 
              started back in 2018 when I decided do a formation to be a web developer and  after that i try to editing custom Tumblr themes by my self — turns out hacking together a custom reblog button taught me a lot about HTML & CSS !
              </p>
        
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
