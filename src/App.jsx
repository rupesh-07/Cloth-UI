import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import LazyLoading from "./Components/LazyLoading";
import "./App.css";

// Lazy-load the components
const Home = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    // Suspense will show this fallback while components are loading
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
