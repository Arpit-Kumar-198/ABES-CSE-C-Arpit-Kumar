import { useEffect, useState } from 'react'
import Fashion from './components/Fashion';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setBooks(data));
    
  }, []);
  
  return (
    <>
      <center>
        <h1 style={
          {
            fontSize: '5rem',
            color:'red',
          }
        }>Fashion App</h1>
        <Fashion books={ books } />
      </center>
    </>
  )
}

export default App
