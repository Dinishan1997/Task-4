import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="Login-btn">
            <button onClick={() => alert("Sign In Clicked")}>Sign In</button>
          </li>
          <li className="Create-btn">
            <button onClick={() => alert("Create Account Clicked")}>
              Create Account
            </button>
          </li>
        </ul>
      </nav>
      <div className="container">
        <aside className="middlebar">
          <ul>
            <li>
              <a href="#">User Information</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Work experience</a>
            </li>
            <li>
              <a href="#">Personal Information</a>
            </li>
          </ul>
        </aside>
        <main className="page Overview">
          <h1>Hello!!!</h1>
          <p>Welcome to the page</p>
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2022/07/LinkedIn-Banner-Templates-3.png"
            alt="LinkedIn Banner"
          />
        </main>
      </div>
    </div>
  );
};

export default App;
