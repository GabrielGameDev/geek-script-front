import { Routes as WrapperRoutes, Route } from 'react-router-dom'
import Home from './pages/Home'

export function Routes() {
    <WrapperRoutes>
        <Route path="/" element={<Home />} />
    </WrapperRoutes>
}