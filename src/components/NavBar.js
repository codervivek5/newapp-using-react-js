import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NavBar extends Component {
  // static propTypes = {

  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Rabbit News</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/">Home </a>
              </li>
              <li className="nav-item">  <a className="nav-link" href="/about">About</a>   </li>

              <li className="nav-item">  <a className="nav-link" href="/about">business</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">entertainment</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">general</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">health</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">science</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">sports</a>   </li>
              <li className="nav-item">  <a className="nav-link" href="/about">technology</a>   </li>


            </ul>

          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar