import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" id="a" >
        
      
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Irakoze Don De Dieu</h2>
            <img style={{ height: '250px' }} src="images/don4.jpg" alt="avatar" />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
            Hi. I’m , nice to meet you. Please take a look around!
            I am passionate about building excellent software that improves the lives of those around me.
            I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
            What would you do if you had a software expert available at your fingertips?
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">

              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-phone-square" aria-hidden='true'></i>+7 977 533-93-16</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-envelope" aria-hidden='true'></i><a href="mailto:donir23197@gmail.com">donir23197@gmail.com</a></ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent  style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-twitter" aria-hidden='true' ></i><a href="https://twitter.com/don_irakoze">@don_irakoze </a></ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-instagram" aria-hidden='true'></i><a href="https://www.instagram.com/donsix_ambas/"> @donsix_ambas </a> </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-facebook" aria-hidden='true'></i> <a href="https://www.facebook.com/irakoze.dondedieu" > Donsix'ambas Irakoze</a>  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
