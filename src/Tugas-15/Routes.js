import React from 'react'
import {Switch, Route} from 'react-router'
import Tugas9 from '../Tugas-9/index.js'
import Tugas10 from '../Tugas-10/index.js'
import Tugas11 from '../Tugas-11/Timer.js'
import Tugas12 from '../Tugas-12/ListForm.js'
import Tugas13 from '../Tugas-13/Hooks.js'
import Tugas14 from '../Tugas-14/Data.js'

const Routes = () => {
	return(
		<section>
			<Switch>
				<Route path="/tugas9" component={Tugas9}/>
				<Route path="/tugas10" component={Tugas10}/>
				<Route path="/tugas11" component={Tugas11}/>
				<Route path="/tugas12" component={Tugas12}/>
				<Route path="/tugas13" component={Tugas13}/>
				<Route path="/tugas14" component={Tugas14}/>
			</Switch>
		</section>
	)
}
export default Routes
