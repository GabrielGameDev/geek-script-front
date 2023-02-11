import { Routes as WrapperRoutes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'

export function Routes() {

    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home />} />
            </WrapperRoutes>
        </BrowserRouter>

    );
}