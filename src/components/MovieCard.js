import React from "react";
import { addfavourite, removefavourite } from "../actions";

class MovieCard extends React.Component {

    handlefav = () => {
        const { movie } = this.props;
        this.props.dispatch(addfavourite(movie));
    }

    handleUnfav = () => {
        const { movie } = this.props;
        this.props.dispatch(removefavourite(movie));
    }

    render() {
        const { movie, ismovfav } = this.props;
        //console.log(movie);
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {ismovfav
                            ? <button className="unfavourite-btn" onClick={this.handleUnfav}>Unfavourite</button>
                            : <button className="favourite-btn" onClick={this.handlefav}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;