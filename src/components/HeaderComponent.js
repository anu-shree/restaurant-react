import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  Collapse,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Col
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { LocalForm, Errors, Control } from "react-redux-form";

const required = val => val && val.length;
const minLength = len => val => val && val.length >= len;
const validEmail = val =>
  /^[a-z]+\.[0-9]{2}[a-z]{2}[0-9]{4}\@([a-z].\.)?iitism\.ac\.in$/i.test(val);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isSignupModalOpen: false
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  toggleModal1() {
    this.setState({ isSignupModalOpen: !this.state.isSignupModalOpen });
  }

  handleLogin(evt) {
    this.toggleModal();

    alert(this.username.value + " " + this.password.value);

    evt.preventDefault();
  }

  handleRegister() {
    this.toggleModal1();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                widtg="41"
                alt="Ristorance Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg" /> About us
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg" /> Menu
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg" /> Contact us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg">Login</span>
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </NavItem>

                <NavItem>
                  <Button outline onClick={this.toggleModal1}>
                    <span className="fa fa-sign-in fa-lg">Sign Up </span>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We take inspiration from the world's best restaurants </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}> Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={input => (this.username = input)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={input => (this.password = input)}
                />
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Modal isOpen={this.state.isSignupModalOpen} toggle={this.toggleModal1}>
          <ModalHeader toggle={this.toggleSignupModal}> Sign Up</ModalHeader>
          <ModalBody>
            <LocalForm model="user" onSubmit={this.handleRegister}>
              <br />
              <h4 />
              <br />
              <FormGroup row>
                <Label htmlFor="name" sm={2}>
                  Name:
                </Label>
                <Col>
                  <Control.text
                    sm={10}
                    model=".name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Email" sm={2}>
                  Email:
                </Label>
                <Col sm={10}>
                  <Control.text
                    sm={10}
                    model=".email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="abc.123@xy.iitism.ac.in"
                    validators={{
                      required,
                      validEmail
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: "Required",
                      validEmail: "Enter the work E-mail of IIT-ISM"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="username" sm={2}>
                  Username:
                </Label>
                <Col>
                  <Control.text
                    sm={10}
                    model=".username"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Name"
                    validators={{
                      required
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="branch" sm={2}>
                  Branch
                </Label>
                <Col sm={10}>
                  <Input type="select" name="branch" id="branch">
                    <option>B.Tech</option>
                    <option>M.Tech</option>
                    <option>Dual Degree</option>
                    <option>Integrated B.Tech and M.Tech</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="department" sm={2}>
                  department
                </Label>
                <Col sm={10}>
                  <Input type="select" name="department" id="department">
                    <option>Electrical Engineering</option>
                    <option>Computer Science and Engineering</option>
                    <option>Electronics Engineering</option>
                    <option>Applied Mathematics</option>
                    <option>Applied Physics </option>
                    <option>Mechanical Engineering</option>
                    <option>Civil Engineering</option>
                    <option>Chemical Engineering</option>
                    <option>Environmental Science and Engineering</option>
                    <option>Mining Engineering</option>
                    <option>Petroleum Engineering</option>
                    <option>Humanities and Social Science Engineering</option>
                    <option>Management Studies</option>
                    <option>Fuel and Mineral Engineering </option>
                    <option>Mining Machinery Engineering</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Password" sm={2}>
                  Password:
                </Label>
                <Col sm={10}>
                  <Control.text
                    sm={10}
                    model=".password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    validators={{
                      required,
                      minLength: minLength(8)
                    }}
                  />

                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Password should be atleast 8 characters"
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="confirmPassword" sm={2}>
                  Confirm Password:
                </Label>
                <Col sm={10}>
                  <Control.text
                    sm={10}
                    model=".confirmPassword"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="******"
                    validators={{
                      required,
                      minLength: minLength(8)
                    }}
                  />

                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Password should be atleast 8 characters"
                    }}
                  />
                </Col>
              </FormGroup>

              <br />
              <Button type="submit" value="submit" color="primary">
                Sign Up
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
