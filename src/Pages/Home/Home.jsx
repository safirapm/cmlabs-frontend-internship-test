import React from "react";
import Categories from "../../components/Categories/Categories";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <div className="header-home d-flex flex-column align-items-start justify-content-center mb-5">
          <h1>
            Welcome to{" "}
            <b>
              <span style={{ color: "#a23131" }}>Houseat</span>
            </b>
            .
          </h1>
          <p>A novel discovery to home meals.</p>
        </div>
        <Categories />
      </div>
    </>
  );
};

export default Home;
