import React, { Component } from 'react';
import './App.css';
// import Card from './components/Card';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import 'tachyons';
import Scroll from './components/Scroll';
import ErrorHandler from './ErrorHandler';
// import { robots } from "./robots";

import { connect } from 'react-redux';
import { setSearchField, fetchRobots } from './redux/actions'; //this is the action
// import {setSearchField} from './redux/';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
   onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
   onAppMount: () => dispatch(fetchRobots()),
  }
}

class App extends Component {
  constructor () {
    super()
    // this.state = {
    //   robots: [],
    //   searchfield: "",
    // }
  }

  // onSearchChange = (event) => {
  //   this.state.searchfield = event.target.value;
  //   // console.log(this.state.searchfield);
  //   // this.setState({ searchfield:event.target.value });
  //
  // }

  onButtonClick = () => {
    this.setState({ searchField: this.state.searchField })
  }

  async componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => { this.setState({ robots : users}) });
    this.props.onAppMount();
  }



  render() {

    const { searchField, onButtonClick, robots } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="wrapper">
        <div className="navbar">
          <Header>
            <SearchBox searchChange={this.onSearchChange} buttonClick={this.onButtonClick}  />
          </Header>
        </div>
        <div className='tc robot-list'>
          <ErrorHandler>
            <Scroll>
              <CardList robot={filteredRobots}  />
            </Scroll>
          </ErrorHandler>
        </div>
      </div>
    );
  }
}




// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
