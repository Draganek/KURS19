import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import { useState } from 'react'
import './App.css'

const initHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: '8.5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: '9',
    description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://picsum.photos/id/238/300/200',
  }
]

function App() {
  const [hotels, setHotels] = useState(initHotels)

  const onSearch = (query) => {
    const filteredHotels = initHotels
      .filter(hotel => hotel.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    setHotels(filteredHotels)
  }


  return (
    <>
      <Header onSearch={onSearch} />
      <Menu />
      <Hotels hotels={hotels} />
    </>
  )
}

export default App
