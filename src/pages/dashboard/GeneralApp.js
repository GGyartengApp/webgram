import React, {Suspense, lazy} from "react";

const Selfie = lazy(() => import("../../components/Cat"));

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="Loading...">
        <Selfie />
      </Suspense>
    </>
  );
};

export default GeneralApp;
