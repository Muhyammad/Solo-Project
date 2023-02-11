import React from 'react'
import './TopBar.css'

export default function TopBar() {
  return (
    <div>
      <ul className="ulTop">
        <li>
          <button className="linia">Special Offer</button>{' '}
        </li>
        <li>
          <button className="linia">New car</button>{' '}
        </li>
        <li>
          <button className="linia">Most popular</button>{' '}
        </li>
        <li>
          <button className="linia"> Daily</button>
        </li>
      </ul>
      <div className="content">
        <div>
          <img className="imgContent" src="Rectangle 14.png" alt="" />
          <p className="pContent">Ferrari Roma</p>
          <button className="Rent">Rent</button>
        </div>
        <div>
          <img className="imgContent" src="Rectangle 177.png" alt="" />
          <p className="pContent">Rolls-Royce Ghost</p>
          <button className="Rent">Rent</button>
        </div>
      </div>
      <div className="content2">
        <div>
          <img className="imgContent" src="Rectangle 13.png" alt="" />
          <p className="pContent">Lamborghini Urus</p>
          <button className="Rent">Rent</button>
        </div>
        <div>
          <img className="imgContent" src="Rectangle 178.png" alt="" />
          <p className="pContent">Porsche 911 Turbo S</p>
          <button className="Rent">Rent</button>
        </div>
      </div>
      <div>
        <button className="soloAll">View all</button>
      </div>

      <div className="obout">
        <div>
          <img className="inglogo1" src="Group.png" alt="" />
          <img className="inglogo2" src="Group.png" alt="" />
        </div>

        <div className="all">
          <h2 className="oboutUs">About Us</h2>
          <div className="data">
            <div className="year">
              <h3 className="yearh3">
                8 <span>year</span>
              </h3>
            </div>
            <div className="year">
              <h3 className="yearh3">
                72 <span>cars</span>
              </h3>
            </div>
            <div className="year">
              <h3 className="yearh3">
                196 <span>people</span>
              </h3>
            </div>
          </div>

          <div className='asd'>
            <img className='imgH3' src="“”.png" alt="" />
            <h3 className="h3Top">
              I’m with cars for over 18 years. My auto passion and attention to
              details will make your experience with us second to none.
              Guaranteed.
            </h3>
            <img className='imgH32' src="“” (1).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
