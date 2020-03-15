import React, { Component } from 'react';
import Slider from './components/GameSlider'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar'
import './App.css'
import './components/Banner.css'

const movies = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: '1983'
  },
  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Russian doll'
  },
  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'The rain',
  },
  {
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Sex education'
  },
  {
    id: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Elite'
  },
  {
    id: 6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Black mirror'
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner/>
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
