import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = lazy(() => import('../App'));
const NotFound = lazy(() => import('@/view/not-found/not-found'));
const Home = lazy(() => import('@/view/home/home'));
const Login = lazy(() => import('@/view/login/login'));

const Routers = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<>loading...</>}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/login/:id" element={<Login />} />
                    </Route>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Routers;
