import React, { useEffect, useState } from "react";
import Tmdb from "./services/Tmdb";
import "./App.css";
import Header from "./components/Header";
import MoviesRow from "./components/MoviesRow";
import FeatureMovie from "./components/FeatureMovie";
import Loading from "./components/Loading";

function App() {
	const [movieList, setMovieList] = useState([]);
	const [featuredData, setFeaturedData] = useState(null);
	const [blackHeader, setBlackHeader] = useState(false);

	useEffect(() => {
		const loadLists = async () => {
			let list = await Tmdb.getHomeList();
			setMovieList(list);

      loadFeatured(list);
      
    };
    
		loadLists();
  }, []);
    
	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 50) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};

		window.addEventListener("scroll", scrollListener);

		return () => {
			window.removeEventListener("scroll", scrollListener);
		};
	}, []);

	const loadFeatured = async (list) => {
		let originals = list.filter((item) => item.slug === "originals");
		let randomIndex = Math.floor(
			Math.random() * originals[0].response.results.length
		);

		let featured = originals[0].response.results[randomIndex];
		let featuredInfo = await Tmdb.getTitleInfo(featured.id, "tv");

		setFeaturedData(featuredInfo);
  };


	return (
		<div className="page">
			<Header backgroundBlack={blackHeader} />
			{movieList.length > 0 && featuredData ? (
				<div>
					<FeatureMovie item={featuredData} />
					<section className="lists">
						{movieList.map((list, key) => {
							return (
								<MoviesRow
									key={key}
									title={list.title}
									data={list.response}
								/>
							);
						})}
					</section>
					<footer>
						Direitos de imagens para Netflix
						<br />
						Dados do site themoviedb.org
					</footer>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default App;
