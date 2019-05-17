import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div>
        <style jsx global>
          {`
            .nav {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              align-content: center;
              background-image: linear-gradient(white, #68DCDD);
            }
            .fixed {
              position: fixed;
              width: 100%;
              margin-left: -8px;
              margin-top: -8px;
            }
            button {
              background-color: transparent;
              border: none;
              font-size: 15px;
              font-family: sans-serif;
              font-weight: lighter;
              margin-left: 35%;
              text-color: #8A7CB5
              text-weight: bolder;
            }
            button:hover {
              cursor: pointer;
              color: cornflowerblue;
            }
          `}
        </style>
      </div>
      <div className="fixed">
        <nav className="nav">
          <div>
            <Link to="/"><button type="button">Home</button></Link>
          </div>
          <div>
            <Link to="/champions"><button type="button">Champions</button></Link>
          </div>
          <div>
            <Link to="/Forum"><button type="button">Forum</button></Link>
          </div>
          <div>
            <Link to="/createpost"><button type="button">Create Post</button></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
