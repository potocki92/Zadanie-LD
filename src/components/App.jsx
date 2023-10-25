import { lazy, useState } from "react";
const HomePage = lazy(() => import("../pages/Home"));

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
