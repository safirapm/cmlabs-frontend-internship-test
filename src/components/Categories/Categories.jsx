import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getCategories } from "../../API";
import "./Categories.css";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => {
      setAllCategories(result);
    });
  }, []);

  return (
    <>
      <h2 className="text-center mb-4">Categories</h2>
      <div className="categories-mobile text-center row d-flex justify-content-center mx-3">
        {allCategories.map((cat) => {
          return (
            <div
              key={cat.idCategory}
              className="col-5 col-sm-5 col-lg-3 col-md-3"
            >
              <a href={`/categories/${cat.strCategory}`}>
                <Card className="mb-4">
                  <Card.Img src={cat.strCategoryThumb} alt={cat.strCategory} />
                  <Card.ImgOverlay className="overlay-cat-card d-flex flex-column justify-content-center">
                    <Card.Title>{cat.strCategory}</Card.Title>
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

export default Categories;
