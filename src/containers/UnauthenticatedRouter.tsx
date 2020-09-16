import React, {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {UnauthenticatedLayout} from 'layouts/index';
import {unauthenticatedRoutes} from 'containers/index';
import LoadingContainer from 'components/LoadingContainer/LoadingContainer';

const UnauthenticatedRouter: FC<{}> = () => {
  return (
    <UnauthenticatedLayout>
      <Suspense fallback={<LoadingContainer unauthenticated={true} />}>
        <Routes>
          {unauthenticatedRoutes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Suspense>
    </UnauthenticatedLayout>
  );
};

export default UnauthenticatedRouter;
