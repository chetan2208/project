
import './MiddleLayer.css'

function MiddleLayer() {

    const GotoDetails=()=>{

    }

    return ( 
        <> 
        <div className="container marketing" style={{marginTop:20}}>
                <div className="row">
                    <div className="col-lg-4">
                <img className="img-circle imgs"  src="http://localhost:3000/Imgs/hospital.jpg" alt="Generic placeholder image" width="140" height="140" id='101'  onClick={GotoDetails}/>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                <img className="img-circle imgs" src="http://localhost:3000/Imgs/hospital2.jpg" alt="Generic placeholder image" width="140" height="140" id='102' onClick={GotoDetails}/>
                <h2>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                <img className="img-circle imgs" src="http://localhost:3000/Imgs/hospital3.jpg" alt="Generic placeholder image" width="140" height="140" id='103' onClick={GotoDetails}/>
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
           </div>
        </>
     );
}

export default MiddleLayer;