import React, { useState, useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./MealDetails.css";

const MealDetails = () => {
  const [allMealDetails, setMealDetails] = useState("");
  const { i } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}api/json/v1/1/lookup.php?i=${i}`)
      .then((res) => {
        setMealDetails(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [i]);

  return (
    <>
      <div>
        <div className="header-details mb-2 d-flex flex-column align-items-center">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/categories">Categories</Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate(-1)}>
              Recipes
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Recipe Details</Breadcrumb.Item>
          </Breadcrumb>
          {allMealDetails &&
            allMealDetails.map((detail) => {
              return (
                <div
                  key={detail.idMeal}
                  className="d-flex flex-column align-items-center"
                >
                  <h2>{detail.strMeal}</h2>
                  <img
                    src={detail.strMealThumb}
                    className="detail-img mb-3"
                    alt={detail.strMeal}
                  />
                  <p
                    style={{
                      whiteSpace: "pre-wrap",
                    }}
                    className="text-left mx-5"
                  >
                    {detail.strInstructions}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MealDetails;
