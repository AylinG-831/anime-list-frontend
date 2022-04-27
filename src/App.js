import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container />
      </main>
      <Footer />
    </div>
  );
}

export default App;
