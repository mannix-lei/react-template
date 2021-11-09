import { Outlet } from 'react-router';
import './App.css';

function App() {
    return <div className="App">
        this is main page.

        <Outlet/>
    </div>;
}

export default App;
