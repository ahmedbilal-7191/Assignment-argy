import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from './Container'
const SubHeader = () => {
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "About ABDM",
            slug: "/",
            active: true,
        },
        {
            name: "Resource Centre",
            slug: "/",
            active: true,
        },
        {
            name: "Support",
            slug: "/",
            active: true,
        },

    ]
    return (
        <>
            <header>
                <Container>
                    <nav className='flex '>
                        <ul className='flex  my-auto'>
                            {navItems.map((item) =>
                                item.active ? (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className='inline-bock px-6 py-2 duration-200 bg-blue-900	text-white hover:bg-blue-600 rounded-none'
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
                        <div className='ml-auto my-auto'>
                            <form>
                                <input className="border-solid border-2 border-black" type='text' placeholder='KnowYour Doctor'/>
                            </form>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default SubHeader
