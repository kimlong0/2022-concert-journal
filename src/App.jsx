import Navbar from "./Navbar"
import Card from "./Card"
import Footer from "./Footer"
import data from "./data.js"

export default function App() {
  const cardElements = data.map(item => {
    return <Card 
      key={item.title}
      item={item}
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
