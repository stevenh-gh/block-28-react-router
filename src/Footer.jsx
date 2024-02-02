import { Link } from "react-router-dom";

function Footer()
{
	return (
		<div className="footer">
			<Link to='/'>Home</Link>
			<Link to='/red'>Blue</Link>
			<Link to='/blue'>Blue</Link>
		</div>
	)
}

export default Footer;
