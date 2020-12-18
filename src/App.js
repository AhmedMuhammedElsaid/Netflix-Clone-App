import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import  Row  from './components/Row/Row';
import request from './request';

function App() {
  return (
    <div className="App">
      {/* Hello Netflix Clone */}
      <Navbar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals}  isLargeRow/>
      <Row title="Trending  now" fetchURL={request.fetchTrending} />
      <Row title="Top  Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries " fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
