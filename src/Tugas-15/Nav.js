import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
	return(
		<>
			<header className="dark-mode">
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
					<button className='btn white-mode'>
						Dark Mode
					</button>
				</div>
			</header>

			<ul>
			</ul>
		</>
	)
}

export default Nav
