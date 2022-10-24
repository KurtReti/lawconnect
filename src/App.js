import logo from './logo.svg';
import './css/App.css';
import Header from './components/header';
import Hero from './components/hero';
import Highlights from './components/highlights';
import Sharing from './components/Sharing';
import sharingimg from './assets/images/lc-share-docs.png'

function App() {
  return (
    <div className="app">
    <Header />
    <section id="hero">
    <Hero />
    </section>
    <section id="highlights">
    <Highlights />
    </section>
    <section id="sharing">
    <Sharing title="Sharing Documents" content1="Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document. " content2="If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared." img={sharingimg}/>
    </section>


      
    </div>
  );
}

export default App;
