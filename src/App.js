
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Row from './Components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title = "NETFLIX ORIGINALS"
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
      />
      <Row title = "TRENDING NOW" 
            fetchUrl = {requests.fetchTrending}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}/>

      <Footer />
    </div>
  );
}

export default App;
