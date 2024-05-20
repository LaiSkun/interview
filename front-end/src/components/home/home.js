import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRefferalCode, createSellerLink, deleteSellerLink, searchSellerLink } from '../service/SellerService';
import Cookies from 'js-cookie';
import './home.css'


const Home = ({ auth, setAuth }) => {
    const navigate = useNavigate();
    const [productname, setProductName] = useState('');
    const [responseData, setResponseData] = useState('');
    const [sellerLinks, setSellerLinks] = useState([]);
    useEffect(() => {
        searchLink();
    }, []);

    const handleLogout = () => {
        // Thực hiện các bước để đăng xuất người dùng
        setAuth(false);
        Cookies.remove('loggedInUser');
        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/login');
    };
    const createRefferal = () => {
        const userEmail = Cookies.get('loggedInUser');
        console.log(userEmail)
        const data = {
            email: userEmail,
        };
        createRefferalCode(data).then((response) => {
            console.log(response.data.data);
            setResponseData(response.data.data);
        })
    }
    const createLink = () => {
        const userEmail = Cookies.get('loggedInUser');
        const data = {
            ownerLink: userEmail,
            productName: productname,
            isDeleted: '0'
        }
        createSellerLink(data).then((response) => {
            console.log(response.data)
            if (response.data.errorCode === '0') {
                alert("Tạo Link thành công")
                searchLink();
            }
            else
                alert("Tạo thất bại")
        })
    }

    const searchLink = () => {
        const userEmail = Cookies.get('loggedInUser');
        const data = { ownerLink: userEmail };

        searchSellerLink(data)
            .then((response) => {
                console.log(response.data.data)
                setSellerLinks(response.data.data);            
            })
            .catch((error) => {
                console.error('Error fetching seller links:', error);
            });
    };
    const deleteLink = (linkId) => {
        console.log(linkId)
        const userEmail = Cookies.get('loggedInUser');
        const data ={
            link: linkId,
            isDeleted: '1',
            ownerLink: userEmail,
        }
        deleteSellerLink(data)
            .then((response) => {
               console.log(response.data)
               if (response.data.errorCode === '0') {
                alert("Xóa thành công")
                searchLink();
            }
            else
                alert("Xóa thất bại")
            })
            .catch((error) => {
                console.error('Error deleting seller link:', error);
            });
    };
    return (
        <div>
            <h2>Home</h2>
            <div>
                <label>Product name</label>
                <input
                    type="text"
                    value={productname}
                    onChange={(e) => setProductName(e.target.value)}
                />

            </div>

            <button type="button" onClick={handleLogout}>Logout</button>
            <button type="button" onClick={createRefferal}>Create Refferal Code</button>
            <button type="button" onClick={createLink}>Create Seller Link</button>


            <div className="alert alert-primary" role="alert">
                <p>Refferal Code: {responseData}</p>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Link</th>
                        <th scope="col">Used user</th>
                        <th scope="col">Status</th>
                        <th scope="col">Create Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sellerLinks.map((link, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{link.productName}</td>
                            <td>{link.link}</td>
                            <td>{link.userId}</td>
                            <td>{link.is_deleted ? 'Deleted' : 'Active'}</td>
                            <td>{new Date(link.createdDate).toLocaleString()}</td>
                            <td>
                            <button type="button" className="btn btn-danger"onClick={() => deleteLink(link.link)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default Home;
