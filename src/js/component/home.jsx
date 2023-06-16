import React from "react";
import Weather from "./weather.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Weather />
			
		</div>
	);
};

export default Home;
