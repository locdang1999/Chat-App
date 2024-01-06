import React, { Suspense, lazy } from "react";

// Dynamic Import
const Cat = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        {/* <Cat /> */}
      </Suspense>
    </>
  );
};

export default GeneralApp;
