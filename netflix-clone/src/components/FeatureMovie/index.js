import React from "react";
import infoIcon from "../../assets/info-icon.png"
import "./styles.css";


const FeatureMovie = ({ item }) => {
	const releasedYear = new Date(item.first_air_date).getFullYear();
	const allGenres = item.genres.map((genre) => genre.name).join(", ");

	let description = item.overview
	if(description.length > 200) {
		description = description.substring(0, 201) + "..."
	}

	return (
		<section
			className="featured"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className="featured-vertical">
				<div className="featured-horizontal">
					<div className="fetured-name-container">
						<div className="logo-original-serie">
							<svg
								className="svg-icon-n-logo"
								focusable="true"
								viewBox="225 0 552 1000"
							>
								<defs>
									<radialGradient
										id="1388fb3d-de18-42c1-9de1-104e4149a140-a"
										r="75%"
										gradientTransform="matrix(.38 0 .5785 1 .02 0)"
									>
										<stop
											offset="60%"
											stopOpacity=".3"
										></stop>
										<stop
											offset="90%"
											stopOpacity=".05"
										></stop>
										<stop
											offset="100%"
											stopOpacity="0"
										></stop>
									</radialGradient>
								</defs>
								<path
									d="M225 0v1000c60-8 138-14 198-17V0H225"
									fill="#b1060e"
								></path>
								<path
									d="M579 0v983c71 3 131 9 198 17V0H579"
									fill="#b1060e"
								></path>
								<path
									d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225"
									fill="url(#1388fb3d-de18-42c1-9de1-104e4149a140-a)"
								></path>
								<path
									d="M225 0l349 983c76 3 136 9 203 17L423 0H225"
									fill="#e50914"
								></path>
							</svg>
							<span className="text-original-serie">SÉRIE</span>
						</div>
						<div className="featured-name">{item.name}</div>
					</div>
					<div className="featured-info">
						<div className="featured-rating">
							{item.vote_average} pontos
						</div>
						<div className="featured-released-year">
							{releasedYear}
						</div>
						<div className="featured-seasons">
							{item.number_of_seasons} temporada
							{item.number_of_seasons !== 1 ? "s" : null}
						</div>
					</div>
					<div className="featured-description">{description}</div>
					<div className="featured-buttons"> 
						<button className="featured-watch-button">
							<div className="button-content">
								<div className="more-info-icon-div">
									<span className="button-text">
										► Assistir
									</span>
								</div>
							</div>
						</button>
						<button className="featured-more-info-button">
							<div className="more-info-button-content">
								<div className="more-info-icon-div">
									<img
										src={infoIcon}
										alt="more info icon"
										className="more-info-icon-img"
									/>
								</div>
								<span className="button-text">
									Mais informações
								</span>
							</div>
						</button>
					</div>
					<div className="featured-genres">
						<span className="genres-label">Gêneros: </span>
						<span className="genres-names">{allGenres}</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureMovie;
