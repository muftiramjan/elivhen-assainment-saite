
import { useLoaderData } from 'react-router-dom';
import Benar from '../Benar/Benar';
import About from './About/About';
import Tabss from './Tabss';

import Sarvises from './saeveses/Sarvises';
const Home = () => {
	const tobs =useLoaderData();
	console.log(tobs);
	return (
		<div>
			<Benar></Benar>
			<Tabss tobs={tobs}/>
			<About></About>
			<Sarvises></Sarvises>


		</div>
	);
};

export default Home;