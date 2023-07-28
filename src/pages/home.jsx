import React from "react";
import Layout from "../components/Layout";
import home from "../images/home.jpg";
import '../styles/home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${home})` }}>
        <div className="headerContainer">
          <h1>
            The meal kit that<br></br>puts quality first
          </h1>
          <button>SEE PLANS</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
