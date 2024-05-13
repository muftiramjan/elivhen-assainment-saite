
import { Player } from '@lottiefiles/react-lottie-player';
const Fotter = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>

      <Player 
				autoplay
				loop
				src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
				style={{ height: '150px', width: '150px' }}
			>
			</Player>

        <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
    
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Fotter;