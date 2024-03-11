function Navbar(props) {
  let myStyle = {
    color: props.whichtheme === 'dark' ? 'white' : 'black'
  };
  console.log(props.whichtheme)
  return (
    <nav className="navbar navbar-expand-lg" style={myStyle}>
      <div className="container-fluid" style={myStyle}>
        <a className="navbar-brand" href="#" style={myStyle}>Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={myStyle}>
            <a className="nav-link active" aria-current="page" href="#" style={myStyle}>Home</a>
            <a className="nav-link" href="#" style={myStyle}>Features</a>
            <a className="nav-link" href="#" style={myStyle}>Pricing</a>
            <a className="nav-link" onClick={props.handleDarkMode}><img src={props.darkmodebutton} alt="" height={28}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
