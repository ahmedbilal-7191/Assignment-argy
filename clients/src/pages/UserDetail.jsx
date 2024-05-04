import React from 'react'
import Container from '../components/Container'
import { useNavigate } from 'react-router-dom';
const UserDetail = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
      };
    return (
        <Container>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-4">Login Successful!</h2>
                    <p className="text-gray-700 mb-4">Thank you for Login. Your have has been successfully Loggedin.</p>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>
                            Go to Home
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserDetail
