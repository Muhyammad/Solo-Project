import Carousel from './components/Carousel'
import ColorSchemesExample from './components/NavBar' 
import IntroBlock from './components/IntroBlock'
import TopBar from './components/TopBar'
import DarkVariantExample from './components/Carausel2'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <ColorSchemesExample/>
      <Carousel/>
      <IntroBlock/>
      <TopBar/>
      <DarkVariantExample/>
      <Footer/>

    </div>
  )
}

export default App
