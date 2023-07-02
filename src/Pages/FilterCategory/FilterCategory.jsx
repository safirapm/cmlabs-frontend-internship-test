import React, { useState, useEffect } from "react";
import axios from "axios";
import { Breadcrumb, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./FilterCategory.css";

const FilterCategory = () => {
  const [allFilterCat, setFilterCat] = useState([]);
  const { i } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}api/json/v1/1/filter.php?c=${i}`)
      .then((res) => {
        setFilterCat(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [i]);

  return (
    <>
      <div className="header-filter d-flex flex-column justify-content-center align-items-center">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/categories">Categories</Breadcrumb.Item>
          <Breadcrumb.Item active>Recipes</Breadcrumb.Item>
        </Breadcrumb>
        <h2>{i} Recipe Collections</h2>
      </div>
      <div className="row d-flex justify-content-center mx-4">
        {allFilterCat &&
          allFilterCat.map((catFilter) => {
            return (
              <div
                key={catFilter.idMeal}
                className="col-5 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center"
              >
                <a href={`/details/${catFilter.idMeal}`}>
                  <Card className="mb-3">
                    <Card.Img
                      src={catFilter.strMealThumb}
                      alt={catFilter.strMeal}
                    />
                    <Card.ImgOverlay className="overlay-filter-card d-flex flex-column justify-content-center text-center">
                      <Card.Title>{catFilter.strMeal}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FilterCategory;
