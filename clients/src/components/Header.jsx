import React from 'react'
import Container from './Container'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo1 from '../imgs/logo1.png'
import logo2 from '../imgs/logo2.png'
const Header = () => {

    const navigate = useNavigate()

    const navItems = [
        // {
        //     name: 'Home',
        //     slug: "/",
        //     active: true
        // },
        {
            name: "Login/Registration",
            slug: "/login",
            active: true,
        },
        {
            name: "AdminLogin",
            slug: "/",
            active: true,
        },

    ]
    return (
        <>
            <header>
                <Container>
                    <nav className='flex'>
                        <div className='my-auto m-2'>
                            <Link to='/'>
                                <img style={{ height: '50px', width: '50px' }} src={logo1} />

                            </Link>
                        </div>
                        <div className='my-auto bg-black' >
                            <Link to='/'>
                                <img src={logo2} style={{ height: '50px', width: '100px' }}/>
                            </Link>
                        </div>
                        <ul className='flex ml-auto my-auto'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className=' m-2 inline-bock px-6 py-2  rounded-none bg-orange-600 duration-200 hover:bg-orange-500'
                                        >{item.name}</button>
                                    </li>
                                ) : null
                            )}

                            {/* {authStatus && (
                            <li >
                                <LogoutBtn />
                            </li>
                        )} */}
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header
