import { Cases, ForWhat, Header, HeroSection, RequestForm, Features, Wrapper } from './components';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <ForWhat />
      <Features />
      <Cases />
      <RequestForm />
      <Footer />
    </Wrapper>
  );
}

export default App;
