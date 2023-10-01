import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { routerConfig } from '../config/routerConfig';
import { PageLoader } from '../../../components/PageLoader/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="app-wrapper">
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;