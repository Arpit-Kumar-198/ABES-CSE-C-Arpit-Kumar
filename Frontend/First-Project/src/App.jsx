import Header from './components/Header'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Buttons from './components/Butttons'
import Assignment from './components/Assignment'

function App() {
 
  return (
    <>
      <center>
        <Header />
        <Navbar home={"Abes"} />
        <Card />
        <Buttons />
      </center>
      <center>
        <Card name={"Arpit"} course={"B.tech"} />
        <Card name={"Harsh"} course={"M.tech"} />
      </center>
      <hr />
      <Assignment/>
    </>
  )
}

export default App
