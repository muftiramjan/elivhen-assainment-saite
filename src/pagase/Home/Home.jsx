

import Benar from '../Benar/Benar';
import Sarvises from './saeveses/Sarvises';
import { Helmet } from 'react-helmet-async';

const Home = () => {

	return (
		<div>
			<div>
				<Helmet>
					<title>Home</title>
				</Helmet>
			</div>
			<Benar></Benar>

			<Sarvises></Sarvises>
			
		</div>
	);
};

export default Home;