import Carousel from 'react-bootstrap/Carousel'

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item style={{ height: 800 }}>
        <img className="d-block w-100" src="image 1 (1).png" alt="First slide" />
      </Carousel.Item>

      <Carousel.Item style={{ height: 800 }}>
        <img
          className="d-block w-100"
          src="Rectangle 18.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default DarkVariantExample
