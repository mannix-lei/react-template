import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();

    const login = () => {
        nav('/login', { replace: true, state: { data: '1212' } });
    };

    return (
        <>
            welcome to home
            <button onClick={login}>to login</button>
        </>
    );
};
export default Home;
