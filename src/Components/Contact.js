import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nihorimbere Belyse</h2>
            <img style={{ height: '250px' }} src="images/DSC_5211-00.jpg" alt="avatar" />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              I am Nihorimbere Belyse, experienced member of the healthcare  with skills in time management and interpersonal communication
              I have extensive knowledge in filling prescriptions, reviewing medical history records and identifying potential drug interactions
              I’m passionate about making people feel better by providing them with quality care through medication therapy management.
              As a skilled pharmaceutical technician I offer my expertise to help patients get back on their feet after surgery or injury while still ensuring safety protocols are met.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">

              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-phone-square" aria-hidden='true'></i>+7 930 965-63-34</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}><i className="fa fa-envelope" aria-hidden='true'></i>nihorimberebelyse2020@gmail.com</ListItemContent>
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
