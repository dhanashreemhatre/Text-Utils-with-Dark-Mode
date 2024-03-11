
function About(props) {
   
    
  return (
    <div>
        

        
       <div className="container my-3" style={props.myStyle}>
       <div className="card" style={props.myStyle}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" style={props.myStyle}>Go somewhere</a>
        </div>
        </div>
       </div>
    </div>
  )
}

export default About