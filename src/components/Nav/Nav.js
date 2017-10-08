import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      page: nextProps.page
    })
  }
  render() {
    let activeClass = "nav-link";

    return (
      <header className="row">
        <div className="col-lg-2">
          <img className="header-logo" src="/img/screensocial_logo_dark_2x.png" />
        </div>
        <div className="col-lg-10">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item"><a className="nav-link" href="/#/">Frontpage</a></li>
            <li className="nav-item"><a className="nav-link" href="/#/investor">Investor</a></li>
            <li className="nav-item"><a className="nav-link" href="/#/SME">SME</a></li>
            <li className="nav-item"><a className="nav-link" href="/#/acquisition">Acquisition</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Nav;
