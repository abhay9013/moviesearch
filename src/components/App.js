import React from "react";
import { connect } from "react-redux";
import { data } from '../data';
import Navbar from './Navbar';

import { addmovies, showfav } from "../actions";
import MovieCard from './MovieCard';

//import { connect, StoreContext } from "..";

class App extends React.Component {
  componentDidMount() {
    //make api call
    //dispatch action
    //console.log("TEST_202")
    this.props.dispatch(addmovies(data));
  }


  ismovfav = (mov) => {
    const { movies } = this.props;
    const ind = movies.favourites.indexOf(mov);

    if (ind !== -1) {
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.dispatch(showfav(val));
  }

  render() {

    //console.log('State', this.props.store.getState());
    const { movies, search } = this.props; //{movies;{},search:{}}
    console.log('Movies', movies);
    const { list, favourites, showfav } = movies


    const displaymov = showfav ? favourites : list;


    return (
      <div className="App">
        <Navbar
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showfav ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>

            <div className={`tab ${showfav ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div id="list">
            {displaymov.map((mov) => (
              //{ console.log(movie) }
              <MovieCard
                movie={mov}
                key={mov.imdbID}
                dispatch={this.props.dispatch}
                ismovfav={this.ismovfav(mov)}
              />
            ))}
          </div>

          {displaymov.length === 0 ? <div className="no-movies">No Movies to Display!!!!</div> : null}
        </div>
      </div>
    );
  }
}

/*class Appwrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}*/




function mapStateToProps(state) {
  //console.log("hii2");
  return {
    movies: state.movies,
    search: state.search
  };
}

const connectAppcomponent = connect(mapStateToProps)(App); //dispatch will be passed as default, only that component will be rerender instead of all

export default connectAppcomponent;