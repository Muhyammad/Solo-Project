import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="leftNavBar">
        <ul className="displey">
          <li>
            <a href="">
              <img src="menu.png" alt="" />{' '}
            </a>
          </li>
          <li>
            <a href="">Car List</a>
          </li>
          <li>
            <a href="">Yacht listг</a>
          </li>
          <li>
            <a href="">Chauffeur</a>
          </li>
        </ul>
      </div>

      <div className="imgLogo">
        <img className="imgLogolg" src="Group 16164.png" alt="" />
        <img className="imgp" src="Vector.png" alt="" />
      </div>

      <div className="rightNavBar">
        <ul className="displeyBtn">
          <li>
            <a href="">+7(989)178 0878</a>
          </li>
          <li>
            <button className="linia">forma</button>
          </li>
          <li>
            <button className="linia">sign on</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
