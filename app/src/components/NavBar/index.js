
import { Link } from 'react-router-dom';
import CartWidget  from '../CartWidget';
import './styles.scss';




function NavBar () {
  return (
    <div className ="header ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="logo">
            <Link to='/'>
              <img src="/logo-candle.png" alt="Site logo" height="80" width="100" />
            </Link>
            </div>
        <div className="collapse navbar-collapse nav justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/categoria/velas' > Velas </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/categoria/difusores' > Difusores </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/categoria/repuestos'> Repuestos </Link>
            </li>
          </ul>
        </div>
    </div>
  <div className="App">
    <Link link className="nav-link" to='cart'>
    <CartWidget />
    </Link>
  </div>
  </nav>
</div>

  );
}

export default NavBar;