import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/"
      );
    };
    this.calculator1 = () => {
      window.location.assign(
        "https://github.com/donir125/UI-UX-Project"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://ui-ux-project-orcin.vercel.app/"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/");
    };
    this.portfoliolive = () => {
      window.location.assign("https://www.adrianflux.co.uk/blog/");
    };
    this.ecommerce = () => {
      window.location.assign("https://counter-ux-ui.vercel.app/counter");
    };
    this.leavemangement = () => {
      window.location.assign("https://www.qualitysolicitors.com/");
    };
    this.crudapplication = () => {
      window.location.assign(
        "https://github.com/"
      );
    };
    this.facebook = () => {
      window.location.assign(
        "https://github.com/donir125"
      );
      
    };
    this.figma = () => {
      window.location.assign(
        "https://github.com/donir125/counter_UX-UI"
      );
      
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "yellow",
                  height: "180px",
                  background: "url(images/proj.png) center / cover",
                }}
              >
                Project Arc
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Manage, arc, and update all project details, and gain insight into how the project is progressing against your project plan with this project ARC
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Calculator */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#1400c6",
                  height: "180px",
                  background: "url(images/projet3.png) center / cover",
                }}
              >
                Project MYGLAMM SHOP
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                MYGLAMM, allocate,is a web store sitr and manage project resources with a different variety af products, which gives team members and stakeholders insight into who is working on what.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.calculator1.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple onClick={this.calculator.bind(this)} style={{ margin: "0 10px" } }>
                  <i className="fa fa-desktop" aria-hidden="true"   /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Portfolio */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/projet2.png) center / cover",
                }}
              >
                Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              This is my first document or website that highlights my skills, abilities, and experience.
               A portfolio contains a collection of your academic and personal projects
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.portfolio.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Ecom-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/project4.png) center / cover",
                }}
              >
                Figma counter
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Fy first figma implementation Exercice
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.figma.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.ecommerce.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Leave-management */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#8458B3",
                  height: "180px",
                  background: "url(images/leavmagmnt.png) center / cover",
                }}
              >
               Quality Solicitors
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              Find a local QualitySolicitors branch
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.crudapplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple onClick={this.leavemangement.bind(this)} style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* portfoliolive */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/blog.png) center / cover",
                }}
              >
                @Blog
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
              This blog explains everything you need to know about confusing Motability insurance rules.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.crudapplication.bind(this)} 
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.portfoliolive.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
            {/* Store-Procedure */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/parteship.png) center / cover",
                }}
              >
                Snake Game with C++
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                @devops practices
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else {
        return (
          <div>
            {/* facebook */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/gitdon.png) center / cover",
                }}
              >
              Find all my projects  repositories here  
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                @donir125
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.facebook.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>My projectss</Tab>
          <Tab> Collabortions </Tab>
          <Tab>With partnership</Tab>
          <Tab>Visit my Git account</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
