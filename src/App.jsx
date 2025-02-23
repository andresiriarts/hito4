/* import Home from './assets/components/Home' */
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'
import Navbar from './assets/components/Navbar'
import Register from './assets/components/Register'
import Home from './assets/components/Home'
import Cart from './assets/components/Cart'
import Pizza from './assets/components/Pizza'


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <Pizza/>
      {/* <Cart/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </>
  )
}

export default App