import React, { Component } from "react";
import { Link } from "react-router-dom";
export class navbar extends Component {
  constructor(myVariable) {
    super();
    this.state = { search: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Search() {
  //   var myVariable = this.state.search;
  //   //console.log(myVariable);
  // }
  handleSearch(e) {
    this.setState({ search: e.target.value });

  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand mx-3 text-primary" to="#">
            News-aunt
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/India">
                  India
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">
                  Buisness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Programming">
                  Programming
                </Link>
              </li>     
              
             <li className="nav-item">
                <Link className="nav-link" to="/coding">
                  Coding
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary" to="/About Us">
                  About Us
                </Link>
              </li>
            </ul>

            <input
              className="form-control mr-sm-1 "
              value={this.state.search}
              onChange={this.handleSearch}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
             // onClick={this.Search()}
              type="search"
            >
               <Link className="nav-link text-primary" to={this.state.search} >
                 Search
                </Link>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
export default navbar;
