import React from "react";
// import { Link, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import CocktailCards from "./CocktailCards";
import CustomSwiper from './CustomSwiper'
import Footer from "./Footer";


export default function Demo() {
	return (
		<>
			<NavBar />
		{/* <CustomSwiper /> */}
			<CocktailCards />
			<Footer />
			{/* { {currentUser ? <Customer /> : <div><Link to="/login">Log in</Link>{"  or  "} 	<Link to="/signup">Sign up</Link> </div>} } */}
		</>
	);
}