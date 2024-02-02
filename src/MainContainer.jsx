
function MainContainer()
{
	return (
		<div id="main-section">
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='/blue' element={ <Blue /> } />
				<Route path='/red' element={ <Red /> } />
			</Routes>
		</div>
	)
}

export default MainContainer;
