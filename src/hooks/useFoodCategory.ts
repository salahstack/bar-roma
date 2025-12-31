/**
 * Node modules
 */

import { useContext } from "react";
/**
 * Contexts
 */
import { FoodCategoryContext } from "../contexts/FoodCategoryContext";


const useFoodCategory = () => useContext(FoodCategoryContext);

export {
  useFoodCategory
}