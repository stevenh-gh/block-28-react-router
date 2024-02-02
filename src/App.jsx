import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Blue from './Blue'
import Red from './Red'
import Home from './Home'
import Navbar from './Navbar'
import MainContainer from './MainContainer'

function App()
{
	return (
		<div id="container">
			<Navbar />
			<MainContainer />
		</div>
	)
}

export default App
