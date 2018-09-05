import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./friends.css";
import CurrentFriends from "../../components/CurrentFriends/currentfriends";
import FriendsSearch from "../../components/FriendSearch/friendsearch";
// import FriendsResult from "../../components/FriendsResult/friendsresult";

import NavTabs from "../../components/NavTabs"

class Friends extends Component {

  state = {
    currentPage: "Friends",
    username: window.username,
  };

  // componentDidMount() {
  //   this.onPageLoad();
  // }

  // onPageLoad = () => {
  //   this.location.pathname = "/friends/" + localStorage.getItem("username");
  // }

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     // execute AJAX request for current friends
  //     // -> .then setState for friendSearchResults to response from AJAX request
  // }

  render() {
    
    window.username = this.state.username;

    return (
      <div className="wrapper">
        <NavTabs />
        <Jumbotron>
          <div className="row">
            <div class="card col-4">
              <div class="card-body">
                
                  <CurrentFriends />
              </div>
            </div>

            <div class="col-1"></div>

            <div class="card col-7">
              <div class="card-body">
                  {/* <FriendsResult /> */}
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row">
            <div class="card col-4">
              <h2 className ="card-text">Make New Friends:</h2>
                <div class="card-body">
                  <FriendsSearch handleFormSubmit={this.handleFormSubmit} />
                  {/* <FriendsResult results={this.state.friendSearchResults} /> */}
                </div>
            </div>
          </div>
        
        </Jumbotron>
       
      </div>
    );
  }
}

export default Friends;
