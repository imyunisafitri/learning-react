import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//compponents
//import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers, {careersLoader} from "./careers/Careers";
import CareersError from "./careers/CareersError";
import { ContactAction } from "./pages/help/Contact";


//layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import CareersDetail, { careersDetailsLoader } from "./careers/CareersDetail";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={ContactAction}/>
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers/>}
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareersDetail />}
          loader={careersDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
