import React from 'react'
import './IntroBlock.css'

export default function IntroBlock() {
  return (
    <div className="introBlock">
      <div className="imgBlock">
        <img className="imgCar" src="Rectangle 170.png" alt="" />
        <p className="introP">
          Rent Lamborghini <br /> Huracan STO
        </p>
        <p className="introP1">Rent is from aed</p>

        <p className="introP2">2 400$</p>

        <p className="introP3">per day</p>
      </div>
      <div>
        <h2 className="h2Intro">Most Popular</h2>
        <p className='pIntro'>
          Главным принципом нашей работы является индивидуальный подход к
          клиенту, с учетом его желаний, интересов и потребностей. Именно
          поэтому мы сделали наши условия максимально простыми и понятными. Вы
          можете оформить аренду, даже не посещая наш офис, достаточно просто
          прислать нам копии документов по Whatsapp или email. Полная процедура
          оформления проката Lamborghini Huracan STO в Лехе займет не более 5-10
          минут.
        </p>
        <p className='pIntro'>
          Чтобы заказать авто и заключить договор, оставьте всю необходимую
          информацию в простой онлайн-форме на сайте. В самое ближайшее время с
          вами свяжется наш оператор и выяснит все детали. Также можете
          позвонить нам по телефону +39 069 4803170 (Viber, Whatsapp) или
          написать на почту info@rentluxecar.com.
        </p>
      </div>
    </div>
  )
}
