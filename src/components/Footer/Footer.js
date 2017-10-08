import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
     	<div className="container text-center">
          <div className="row">                   
          	<div className="col-md-4 col-xs-12">
		       <div className="col-xs-12 footer_div">
		       	<p>Ⓒ 2017 Screensocial Ltd<br/>All Rights Reserved</p>        
		       </div>
          	</div>
		      <div className="col-md-4 col-xs-12">
		        <div className="col-xs-12 footer_div">
		        </div>
		      </div>
		      <div className="col-md-4 col-xs-12">
		        <div className="col-xs-12 footer_div">
		        </div>
		      </div>
     	  </div>
      	</div>
      </footer>
    )
  }
}

export default Footer;
