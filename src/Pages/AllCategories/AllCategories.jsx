import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import "./AllCategories.css";

const AllCategories = () => {
  return (
    <>
      <div className="header-categories d-flex flex-column align-items-center">
        <div className="d-flex align-items-center">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Categories</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Categories />
      </div>
    </>
  );
};

export default AllCategories;
