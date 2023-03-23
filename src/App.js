import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Blog from "./pages/Blog";
import NewBlog from "./pages/NewBlog";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="newblog" element={<NewBlog />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
