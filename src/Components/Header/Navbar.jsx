import { Link } from "react-router-dom";

function Navbar(props) {
  let myStyle = {
    color: props.whichtheme === 'dark' ? 'white' : 'black'
  };
 
  return (
    <nav className="navbar navbar-expand-lg" style={myStyle}>
      <div className="container-fluid" style={myStyle}>
        <Link className="navbar-brand" href="/" style={myStyle}><img src="/favicon-32x32.png" alt="" className="px-1"/><span className="text-bold">ext Utils</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={myStyle}>
            <Link className="nav-link active" aria-current="page" to="/" style={myStyle}>Home</Link>
            <Link className="nav-link" to="/about" style={myStyle}>About</Link>
            <a className="nav-link" href="#" style={myStyle}>Pricing</a>
            <a className="nav-link" onClick={props.handleDarkMode}><img src={props.darkmodebutton} alt="" height={28}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
