import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Header from '~/components/Header';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
