import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Service, ErrorPage } from "./Pages";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User from "./Pages/user/User";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <AboutLayout />,
//         children: [
//           {
//             path: "vision",
//             element: <h4>Vision</h4>,
//           },
//           {
//             path: "mission",
//             element: <h4>Mission</h4>,
//           },
//           {
//             path: "goal",
//             element: <h4>Goal</h4>,
//           },
//         ],
//       },
//       {
//         path: "/service",
//         element: <Service />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutLayout />}>
        <Route path="vision" element={<h4>Vision</h4>} />
        <Route path="mission" element={<h4>Mission</h4>} />
        <Route path="goal" element={<h4>Goal</h4>} />
      </Route>
      <Route path="service" element={<Service />} />
      <Route path="user" element={<UserLayout />}>
        <Route path=":id" element={<User />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
