import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./styles.css";

const imageUrl = "https://image.tmdb.org/t/p/w300";

const MoviesRow = ({ title, data }) => {
  const [scrollX, setScrollX] = useState(0);
  
  const handleLeftArrowClick = () => {
    let horizontalOffset = scrollX + Math.round(window.innerWidth / 2)
    if (horizontalOffset > 0) {
      horizontalOffset = 0
    } 

    setScrollX(horizontalOffset);
  };

	const handleRightArrowClick = () => {
    let horizontalOffset = scrollX - Math.round(window.innerWidth / 2);

    let listWidth = data.results.length * 150
    
    if ((window.innerWidth - listWidth) > horizontalOffset) {
      horizontalOffset = (window.innerWidth - listWidth) - 180
    }

    setScrollX(horizontalOffset);
  };

	return (
		<div className="moviesRow">
			<h2>{title}</h2>
			<div
				className="moviesRow-left"
				onClick={handleLeftArrowClick}
				style={{
					display: scrollX < 0 ? "" : "none",
				}}
			>
				<span className="arrow-icon">
					<IoIosArrowBack style={{ fontSize: 50 }} />
				</span>
			</div>
			<div
				className="moviesRow-right"
				onClick={handleRightArrowClick}
			>
				<span className="arrow-icon">
					<IoIosArrowForward style={{ fontSize: 50 }} />
				</span>
			</div>
			<div className="moviesRow-area">
				<div
					className="moviesRow-list"
					style={{
						marginLeft: scrollX,
						width: data.results.length * 155,
					}}
				>
					{data.results.length > 0 &&
						data.results.map((item, key) => {
							return (
								<div key={key} className="moviesRow-item">
									<img
										src={`${imageUrl}${item.poster_path}`}
										alt={item.original_title}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default MoviesRow;
