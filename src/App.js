import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
//import FormComponent from './Tugas-9'
//import TableComponent from './Tugas-10'
//import Timer from './Tugas-11/Timer.js'
//import ListForm from './Tugas-13/Hooks.js'
//import Data from './Tugas-14/Data.js'
import Routes from './Tugas-15/Routes.js'
import Nav from './Tugas-15/Nav.js'
import './Tugas-15/css/style.css'

function App() {
  return (
		<>
			<Router>
				<Nav/>
				<Routes/>
			</Router>
		</>
  );
}

export default App;
