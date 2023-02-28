import React from "react";
import { connect } from "react-redux";

import { addMovieToList, handlemoviesearch } from "../actions";

//import { connect } from "../index";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchtext: ''
        };

    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showsearchresult: false
        });
    }

    handlesearch = () => {
        const { searchtext } = this.state;
        //console.log(searchtext);
        this.props.dispatch(handlemoviesearch(searchtext));
    };

    handlechange = (e) => {
        this.setState({
            searchtext: e.target.value

        })

    }

    render() {
        const { result, showsearchresult } = this.props.search;

        //console.log("TEST_101");

        return (
            <div className="nav">
                <h1 className="heading">Movie App</h1>
                <div className="search-container">
                    <input onChange={this.handlechange} />
                    <button id="search-btn" onClick={this.handlesearch}>Search</button>

                    {showsearchresult &&
                        <div className="search-results">
                            <div className="search-result">
                                <img alt="search-pic" src={result.Poster} />
                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        );
    }
}

// class NavbarWrapper extends React.Component {
//     render() {
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search} />}
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToprops(state) {
    return {
        search: state.search,
    }
}

export default connect(mapStateToprops)(Navbar);
