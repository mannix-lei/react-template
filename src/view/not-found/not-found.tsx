import { useLocation } from 'react-router';

const NotFound = () => {
    const location = useLocation();
    return <>no match for {location.pathname}</>;
};

export default NotFound;
