import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate an API call with a response
    const apiResponse = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];

    // Set the items state with the response data
    setItems(apiResponse);
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  ); 
}

export default App
