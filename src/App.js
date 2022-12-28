import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import DefaultLayout from './layouts';

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
