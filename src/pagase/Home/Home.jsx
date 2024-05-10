
import { useLoaderData } from 'react-router-dom';
import Benar from '../Benar/Benar';
import Tabss from './Tabss';
import Sarvises from './saeveses/Sarvises';
import AvailableFoods from '../AvailableFoods.jsx/AvailableFoods';
import { Helmet } from 'react-helmet-async';

const Home = () => {
	const tobs = useLoaderData();
	console.log(tobs);
	return (
		<div>
			<div>
				<Helmet>
					<title>Home</title>
				</Helmet>
			</div>
			<Benar></Benar>
			<Tabss tobs={tobs} />
			<AvailableFoods></AvailableFoods>
			<Sarvises></Sarvises>


		</div>
	);
};

export default Home;