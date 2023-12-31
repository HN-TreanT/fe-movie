import React from "react";

import image from "../../assets/110715CineHarry746.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./CardeMovie.scss";
import { RouterLinks } from "../../const/RouterLinks";
const CardMovie: React.FC<any> = ({ click }) => {
  const navigate = useNavigate();
  const handleClickCardMovie = () => {
    navigate(RouterLinks.DETAIL_MOVIE);
    console.log("check", window.location.href.includes("/detail-movie"));
    if (window.location.href.includes("/detail-moive")) {
      click();
    }
  };
  return (
    <div onClick={handleClickCardMovie} className="card-movie">
      <div className="image-card-movie">
        <FontAwesomeIcon className="icon-image-play" icon={faPlay} />
        <img
          alt=""
          width={"100%"}
          src={image}
          //  preview={false}
          style={{ borderRadius: "0.5rem" }}
        ></img>
      </div>
      <div className="info-movie-card">
        <div className="row-1">
          <div>harry potter</div>
          <div className="year">2023</div>
        </div>
        <div className="row-2">
          <div className="quality-movie">HD</div>
          <div className="other-info-movie">
            <div className="run-time-card-movie">
              <FontAwesomeIcon style={{ fontSize: "0.5rem", color: "#FE592A", paddingRight: "0.2rem" }} icon={faClock} />
              120m
            </div>
            <div className="rate-card-movie">
              <FontAwesomeIcon
                style={{ fontSize: "0.5rem", color: "#FE592A", paddingRight: "0.2rem" }}
                className="icon"
                icon={faStar}
              />
              7.2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardMovie;
