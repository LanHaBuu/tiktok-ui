import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from './routes'
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((routes, index) => {
            const Pages = routes.component
            let Layout = DefaultLayout
            if (routes.layout) {
              Layout = routes.layout
            } else if (routes.layout === null) {
              Layout = Fragment
            }
            return <Route key={index} path={routes.path} element={<Layout><Pages /></Layout>} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
