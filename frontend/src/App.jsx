import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />}></Route>
          <Route path='/product/:id' element={<ProductScreen />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
