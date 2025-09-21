import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveRates } from './components/LiveRates';
import { CityRatesMarquee } from './components/CityRatesMarquee';
import { SellProcess } from './components/SellProcess';
import { Awards } from './components/Awards';
import { Statistics } from './components/Statistics';
import { Branches } from './components/Branches';
import { WhySellGold } from './components/WhySellGold';
import { GoldBiscuits } from './components/GoldBiscuits';
import { GoldChart } from './components/GoldChart';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="rates">
        <CityRatesMarquee />
        <GoldChart />
        <LiveRates />
      </section>
      <section id="services">
        {/* <LiveRates /> */}
        <SellProcess />
      </section>
      
      <section id="gold-jewellery">
        <GoldBiscuits />
        <Awards />
        <Statistics />
        <WhySellGold />
      </section>
      
      <section id="branches">
        <Branches />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;