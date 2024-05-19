import { useNavigate } from 'react-router-dom';

const Home = ({ auth, setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Thực hiện các bước để đăng xuất người dùng
        setAuth(false);

        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/login');
    };

    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
