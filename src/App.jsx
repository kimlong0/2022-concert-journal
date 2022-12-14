import Navbar from "./Navbar"
import Card from "./Card"
import Footer from "./Footer"
import { useEffect, useState } from "react"

export default function App() {
  const [concertData, setConcertData] = useState([])

  useEffect(() => {
    fetch('data/data.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setConcertData(data);
    })
  }, [])

  const cardElements = concertData.map(item => {
    return <Card 
      key={item.title}
      concertData={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <section className="card-section">
        {cardElements}
      </section>
      <Footer />
    </div>
  )
}
