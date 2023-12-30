import "./App.css";
import Newsfeed from "./component/newsfeed";
import Navbar from "./component/navbar";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
   
    return (
      <Router>
        <div className="App align-items-center">
          <Navbar />
        </div>

        <Routes>
          <Route
            exact
            path="/"
            element={<Newsfeed key="1" category="general" />}
          ></Route>
          <Route
            exact
            path="/Science"
            element={<Newsfeed key="2" category="science" />}
          ></Route>
          <Route
            exact
            path="/Entertainment"
            element={<Newsfeed key="3" category="entertainment" />}
          ></Route>
          <Route
            exact
            path="/Technology"
            element={<Newsfeed key="4" category="technology" />}
          ></Route>
          <Route
            exact
            path="/India"
            element={<Newsfeed key="5" country="in" />}
          ></Route>
          <Route
            exact
            path="/World"
            element={<Newsfeed key="6" category="world" />}
          ></Route>
          <Route
            exact
            path="/Business"
            element={<Newsfeed key="7" category="business" />}
          ></Route>
          <Route
            exact
            path="/Health"
            element={<Newsfeed key="8" category="health" />}
          ></Route>
          <Route
            exact
            path="/Sports"
            element={<Newsfeed key="9" category="sports" />}
          ></Route>
          <Route
            exact
            path="/Programming"
            element={<Newsfeed key="10" q="coding" />}
          ></Route>
          <Route
            exact
            path="/coding"
            element={ 
              
              <Newsfeed 
                key="11"
                myurl="https://newsapi.org/v2/everything?q=coding&from=${currentDate}&sortBy=popularity&apiKey=51ec3cf349aa4946b1cace6a46e42873"
                category="0"
              />
            }
          ></Route>
          <Route
            exact
            path="*"
            element={
              <Newsfeed
                key="12"
                myurl="https://newsapi.org/v2/everything?q=${pathname}&from=2023-11-30&to=2023-12-30&sortBy=popularity&apiKey=51ec3cf349aa4946b1cace6a46e42873"
              />
            }
          ></Route>
        </Routes>
      </Router>
    );
  }
}
