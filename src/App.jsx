import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Blue from './Blue'
import Red from './Red'
import Home from './Home'

function App()
{
	return (
		<div id="container">
			<div id="navbar">
				<Link to='/'>Home</Link>
				<Link to='/blue'>Blue</Link>
				<Link to='/red'>Red</Link>
			</div>
			<div id="main-section">
				<Routes>
					<Route path='/' element={ <Home /> } />
					<Route path='/blue' element={ <Blue /> } />
					<Route path='/red' element={ <Red /> } />
				</Routes>
			</div>
		</div>
	)
}

export default App
