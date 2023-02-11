import Carousel from 'react-bootstrap/Carousel'
import '../components/Css.css'

function UncontrolledExample() {
  return (
    <div className="image">

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 rq"
            src="https://s1.1zoom.ru/big7/268/BUGATTI_La_Voiture_Noire_Front_Black_566148_1920x1080.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rq"
            src="https://s1.1zoom.ru/b5050/489/BUGATTI_La_Voiture_Noire_Black_Black_background_561618_3840x2160.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rq"
            src="https://s1.1zoom.ru/b5050/144/BUGATTI_La_Voiture_Noire_Black_Black_background_565563_1920x1080.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rq"
            src="https://www.bugatti.com/fileadmin/_processed_/sei/p326/se-image-eee855cfbe83e33e6d4624bfaf80b818.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default UncontrolledExample
