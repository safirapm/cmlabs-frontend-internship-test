import axios from "axios";

export const getCategories = async () => {
  const categories = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return categories.data.categories;
};
