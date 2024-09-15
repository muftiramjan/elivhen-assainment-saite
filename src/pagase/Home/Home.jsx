

import Benar from '../Benar/Benar';
import CustomerSays from './CustomerSays/CustomerSays';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import Sarvises from './saeveses/Sarvises';
import { Helmet } from 'react-helmet-async';
import SendMessage from './SendMessage';

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
			<MeetOurTeam></MeetOurTeam>
			<CustomerSays></CustomerSays>
			<SendMessage></SendMessage>
			
		</div>
	);
};

export default Home;