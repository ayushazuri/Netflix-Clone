import "./App.css";
import React from "react";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function App() {
	document.title = "Netflix Clone";
	return (
		<div className="App">
			<Navbar />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Footer />
		</div>
	);
}

export default App;
