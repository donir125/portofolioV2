import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      
      <div style={{ textAlign: "center", marginLeft: '50px', color: '#fff766', marginRight: '20px', marginTop: '70px', width: '84%',background:'#a28089'  , padding: '30px' }}>
        <h1 style={{ fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif' }}>Don Irakoze</h1>
        <p style={{ textAlign: 'justify', fontFamily: 'Oxygen, sans-serif' }}>
          For caracters I’m an enthusiastic, responsible, self-motivated and hard-working person.
          I’m able to work well under pressure. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

          I also recently need to build a web app with API using Node & React.

          Here are a few technologies I’ve been working with recently:

        <li> JavaScript </li> 
        <li> TypeScript </li>
        <li> React </li>
        <li> Eleventy </li>
        <li> Node.js </li>
        <li> WordPress </li>
        <li> Figma </li>
        </p>
      </div>
    );
  }
}

export default Aboutme;
