import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      goNextPage: false,
    };
    this.loadRest = this.loadRest.bind(this);

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  loadRest() {
    this.setState({ goNextPage: true });
  }


  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    setTimeout(this.loadRest, 9000);
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        {this.state.goNextPage &&
          <div>
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Footer data={this.state.resumeData.main} />
          </div>
        }

      </div>
    );
  }
}

App.propTypes = {
  isClick: PropTypes.bool
};

export default App;
