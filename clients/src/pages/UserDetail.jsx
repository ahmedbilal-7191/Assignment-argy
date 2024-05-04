import React from 'react'
import Container from '../components/Container'
const UserDetail = () => {
    return (
        <Container>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-4">Login Successful!</h2>
                    <p className="text-gray-700 mb-4">Thank you for Login. Your account has been successfully created.</p>
                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserDetail
