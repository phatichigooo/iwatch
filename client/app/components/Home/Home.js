import { Link } from 'react-router-dom';
import Logo from './../Header/Logo';
import Menu from './../Header/Menu';

const Home = () => (
  <header >
        <div className="container">
          <div className="row">
           <Logo></Logo>
          <Menu />
          </div>
        </div>
      </header>
);

export default Home;
