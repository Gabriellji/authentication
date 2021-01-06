import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h1>Home</h1>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/secret">Secret</Link></li>
        </ul>
        </>
    ) 
}

export default Home;