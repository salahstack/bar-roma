/**
 * React router dom modules
 */
import { createBrowserRouter } from "react-router-dom";
/**
 * Pages
 */
import App from "../App";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

export default routes;