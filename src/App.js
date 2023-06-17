//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import News from './News';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'


import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  pageSize=15;
  //apiKey=process.env.REACT_APP_NEWS_API

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key ="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/Business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress}  key="entertainment"pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/Health" element={<News setProgress={this.setProgress}  key="health"pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/Science" element={<News setProgress={this.setProgress}  key="science"pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress}  key="sports"pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


