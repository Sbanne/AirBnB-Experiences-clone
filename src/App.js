import './App.css';
import Card from './components/Card';
import data from './components/data';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

  console.log(data);

  const cards = data.map((airbnb) => {
    return (
      <Card
        key={airbnb.id}
        airbnb={airbnb}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
