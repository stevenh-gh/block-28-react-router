import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Footer from './Footer'

function App()
{
	return (
		<div id="container">
			<Navbar />
			<MainContainer />
			<Footer />
		</div>
	)
}

export default App
