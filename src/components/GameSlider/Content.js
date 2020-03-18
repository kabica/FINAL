import React from 'react';
import IconCross from '../public/images/close-cross.png';
import './Content.scss';
import StatsAPI from './StatsApi'

const Content = ({ game, onClose }) => (
  <div className="content">
    <div className="content__background">
      <div
        className="content__background__image"
        style={{ 'backgroundImage': `url(${game.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{game.title}</div>
        <StatsAPI gameSelect={game.title}/>
      </div>
      <button className="content__close" onClick={onClose}>
      <img className="cross" src={IconCross} alt="close"/>
      </button>
    </div>
  </div>
);

export default Content;
