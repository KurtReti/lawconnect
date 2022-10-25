import logo from "./logo.svg";
import "./css/App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Highlights from "./components/highlights";
import Sharing from "./components/Sharing";
import sharingimg from "./assets/images/lc-share-docs.png";
import Signing from "./components/Signing";
import signingimg from "./assets/images/lc-sign-docs-desktop@2x.png";
import signingimgmobile from "./assets/images/lc-sign-docs-mobile@2x.png"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="hero">
        <Hero title="The place to work with your lawyer" content="Your lawyer uses LawConnect to share information with you about your
            legal case in a private, convenient and secure way."/>
      </section>
      <section id="highlights">
        <Highlights title="One Solution Designed to Make Your Firm More Money"/>
      </section>
      <section id="sharing">
        <Sharing
          title="Sharing Documents"
          content1="Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document. "
          content2="If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared."
          img={sharingimg}
        />
      </section>
      <section id="signing">
        <Signing
          title="Signing Documents Electronically"
          content1="LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign important legal documents online."
          img2={signingimgmobile} img1={signingimg}

        />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
