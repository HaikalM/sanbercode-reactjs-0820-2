import React from 'react'
import {DataProvider} from './DataContext.js'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes.js'
import Nav from './Nav.js'
import './css/style.css'

const Data = () => {
	return(
		<DataProvider>
			<Router>
				<Nav/>
				<Routes/>
			</Router>
		</DataProvider>
	)
}

export default Data
