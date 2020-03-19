import React, { Fragment, useEffect, useRef, useState } from 'react';
import Slider from './components/GameSlider'
import Banner from './components/Banner/Banner'
import Navbar from "./components/Header/Navbar"
import './App.css'
import './components/Banner/Banner.css'

const aliases = {
  Nickname: "MasterChef815",
  Discord: "Chief#4782",
  Steam: "The Chief",
  EpicGames: "XxChiefxX",
  Origin: "The_Chief",
  Battlenet: "TheChief#59071",
  Uplay: "MasterChef",
}

const games = [
  {
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51M0IBliDDL._AC_.jpg',
    imageBg: 'https://wallpaperaccess.com/full/806282.jpg',
    title: 'Overwatch'
  },
  {
    id: 2,
    image: 'https://static3.srcdn.com/wordpress/wp-content/uploads/2019/01/The-Division-2-Cover-Art.jpg',
    imageBg: 'https://mocah.org/uploads/posts/126106-cubes-3d-dark-4k.jpg',
    title: 'Division 2'
  },
  {
    id: 3,
    image: 'https://s3-cdn.mogul.gg/gameasset/a756651c-13ec-4515-b61a-34a94fe367f6.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Splitgate',
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/originals/03/cc/7c/03cc7cc933ae62ceceea8880fa860d25.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Counter Strike'
  },
  {
    id: 5,
    image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/8/48913809/48913809_519d33e5-74e6-47c0-b02d-81d185252d03_810_1080.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Apex Legends'
  },
  {
    id: 6,
    image: 'https://www.mobygames.com/images/covers/l/583433-fortnite-battle-royale-xbox-one-front-cover.png',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Fortnite'
  },
  {
    id: 7,
    image: 'https://www.mobygames.com/images/covers/l/590809-borderlands-3-playstation-4-front-cover.png',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Borderlands 3'
  },
  {
    id: 8,
    image: 'https://www.gamingdragons.com/images/game_img/playerunknown_bg.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'PUBG'
  },
  {
    id: 9,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51D0pNAgaxL.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Battlefield 1'
  },  
  {
    id: 10,
    image: 'https://m.media-amazon.com/images/M/MV5BMTVhYzQ0NGMtYmNlNS00MjIzLWFjOTgtNmUxNGExZGI5NjYzXkEyXkFqcGdeQXVyOTE2ODMzOTM@._V1_SX562_CR0,0,562,999_AL_.jpg',
    imageBg: 'https://i.pinimg.com/originals/a6/63/ef/a663efcd360fb281ab27e19628e00b99.jpg',
    title: 'Call of Duty MW'
  },
];

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
    return (
      <div className="app">
        <Fragment>
          <Navbar sticky={isSticky} nickname={aliases.Nickname}/>
        </Fragment>
        <Banner stickyRef={stickyRef} aliases={aliases}/>
        <Slider>
          {games.map(game => (
            <Slider.Item game={game} key={game.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }


export default App;
