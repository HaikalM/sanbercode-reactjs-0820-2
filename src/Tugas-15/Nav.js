import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './DataContext'

const Nav = () => {
	const [backgroundMode, setBackgroundMode] = useContext(DataContext)
	const [btnMode, setBtnMode] = useState('')

	useEffect( () => {
		if(backgroundMode == 'dark-mode'){
			setBtnMode('white-mode')
		}else{
			setBtnMode('dark-mode')
		}
  })

	const handleBackground = (event) => {
		let backgroundColor = event.target.value
		setBackgroundMode(backgroundColor)
		console.log(backgroundMode)
	}

	return(
		<>
			<header className={backgroundMode}>
				<nav className="header-menu">
					<ul>
						<Link to='/tugas9'>Tugas-9</Link>
						<Link to='/tugas10'>Tugas-10</Link>
						<Link to='/tugas11'>Tugas-11</Link>
						<Link to='/tugas12'>Tugas-12</Link>
						<Link to='/tugas13'>Tugas-13</Link>
						<Link to='/tugas14'>Tugas-14</Link>
					</ul>
				</nav>
				<div className="toggle-menu">
					<button className={'btn '+ btnMode} onClick={handleBackground} value={btnMode}>
						{backgroundMode}
					</button>
				</div>
			</header>
		</>
	)
}

export default Nav
