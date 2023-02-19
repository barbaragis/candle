
import CartWidget  from '../CartWidget';
import './styles.scss';




function NavBar () {
  return (
    <div className ="header ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <div className="logo">
            <a href="/">
              <img src="/logo-candle.png" alt="Site logo" height="80" width="100" />
            </a>
            </div>
        <div className="collapse navbar-collapse nav justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Nuestros productos </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"> Contacto </a>
            </li>
          </ul>
        </div>
    </div>
  <div className="App">
    <CartWidget />
  </div>
  </nav>
</div>

  );
}

export default NavBar;