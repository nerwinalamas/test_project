import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col items-center gap-2 my-5 lg:flex-row">
			<p className="text-center">Copyright © 2022 <span className="hover:cursor-pointer hover:underline">Dating with Dignity</span>. All Rights Reserved.</p>
			<div className="flex gap-3">
				<p>|</p>
				<Link to={"/"} title="Terms of Service" className="underline">Terms of Service</Link>
				<Link to={"/"} title="Privacy Policy" className="underline">Privacy Policy</Link>
			</div>
		</div>
	);
};

export default Footer;
