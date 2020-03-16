import React, { Component, Fragment, useEffect, useRef, useState } from 'react';
import Slider from './components/GameSlider'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar'
import Welcome from "./components/Header/Welcome"
import Navbar from "./components/Header/Navbar"
import './App.css'
import './components/Banner.css'

const games = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Overwatch'
  },
  {
    id: 2,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Rainbow 6'
  },
  {
    id: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Total War',
  },
  {
    id: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Dota 2'
  },
  {
    id: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Counter Strike'
  },
  {
    id: 6,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    title: 'Borderlands 3'
  }
];

// class App extends Component {
  function App() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const [isSticky, setSticky] = useState(false)

  const stickyRef = useRef(null)
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false)
  }

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  window.addEventListener("scroll", debounce(handleScroll))
  // render() {
    return (
      <div className="app">
        <Fragment>
          <Navbar sticky={isSticky} />
          {/* <Welcome stickyRef={stickyRef} /> */}
        </Fragment>
        {/* <Sidebar/> */}
        <Banner stickyRef={stickyRef}/>
        <Slider>
          {games.map(game => (
            <Slider.Item game={game} key={game.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }


export default App;
