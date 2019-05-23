/* eslint-disable max-len */
import React from 'react';
import fanArt1 from '../assets/blueprints/fan-art1.jpg';
import fanArt2 from '../assets/blueprints/fan-art2.png';
import fanArt3 from '../assets/blueprints/fan-art3.jpg';
import fanArt4 from '../assets/blueprints/fan-art4.jpeg';
import fanArt5 from '../assets/blueprints/fan-art5.png';
import fanArt6 from '../assets/blueprints/fan-art6.jpg';
import fanArt7 from '../assets/blueprints/fan-art7.jpg';
import fanArt8 from '../assets/blueprints/fan-art8.jpg';
import fanArt9 from '../assets/blueprints/fan-art9.jpg';
import fanArt10 from '../assets/blueprints/fan-art10.jpg';
import fanArt11 from '../assets/blueprints/fan-art11.jpg';
import fanArt12 from '../assets/blueprints/fan-art12.jpg';
import fanArt13 from '../assets/blueprints/fan-art13.png';
import fanArt14 from '../assets/blueprints/fan-art14.jpg';
import fanArt15 from '../assets/blueprints/fan-art15.png';

function Home() {
  return (
    <div>
      <style jsx>
        {`
          .fanart {
            text-align: center;
            border: 3px solid gold;
            background-color: rgba(255,255,255,.5);

          }

          img {
            margin-left: 8px;
          }

          .header {
            text-align: center;
            color: #F1D773;
            text-shadow: 2px 2px black;
          }
          
          .summary {
            color: #F1D773;
            font-weight: bolder;
            text-shadow: 1px 1px black;
            text-align: center;
          }
        `}
      </style>
      <div className="header">
        <h1 className="header">Welcome to League Matcher</h1>
      </div>
      <div className="summary">
        <em><p>Here is where you can find all your League of Legends needs. From finding what champion you want to play for your next match, to finding a team of like minded players to enjoy your future gameplay with!</p></em>
      </div>
      <div className="fanart">
        <h1 className="header">Fan Art</h1>
        <img src={fanArt1} alt="fan-art" />
        <img src={fanArt2} alt="fan-art" />
        <img src={fanArt3} alt="fan-art" />
        <img src={fanArt4} alt="fan-art" />
        <img src={fanArt5} alt="fan-art" />
        <img src={fanArt6} alt="fan-art" />
        <img src={fanArt7} alt="fan-art" />
        <img src={fanArt8} alt="fan-art" />
        <img src={fanArt9} alt="fan-art" />
        <img src={fanArt10} alt="fan-art" />
        <img src={fanArt11} alt="fan-art" />
        <img src={fanArt12} alt="fan-art" />
        <img src={fanArt13} alt="fan-art" />
        <img src={fanArt14} alt="fan-art" />
        <img src={fanArt15} alt="fan-art" />
      </div>
    </div>
  );
}

export default Home;
