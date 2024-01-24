import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./DynamicRouting";
import SingleProduct from "./SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/:id",
    element: <SingleProduct />,
  },
]);

const ProductRouter = () => {
  return <RouterProvider router={router} />;
};

export default ProductRouter;
