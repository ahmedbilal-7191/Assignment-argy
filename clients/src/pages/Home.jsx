import React from 'react'
import Container from '../components/Container'
import healthcare from '../imgs/digitalhealthcare.svg'
const Home = () => {
  return (
    <>

      <div className='bg-blue-600 text-white p-8 '>
        <Container>
          <h1 className='p-2 text-4xl font-bold'>National Healthcare Providers Registry</h1>
          <div className='flex'>
            <div className='p-2 m-2'>
              <p className='font-bold'>Healthcare</p>
              <p className='text-3xl font-bold'>Professionals Registry</p>
              <p>Healthcare Professionals Registry (HPR) is a comprehensive repository of registered and verified different system of medicines (Modern medicine, Dentistry, Ayurveda, Unani, Siddha, Sowa-Rigpa, Homeopathy) and Nurses practitioners delivering healthcare services across India.</p>
            </div>
            <div className='p-2 m-2'>
              <p className='font-bold'>Health</p>
              <p className='text-3xl font-bold'>Facility Registry</p>
              <p>Health Facility Registry is a comprehensive repository of health facilities of the country across modern and traditional systems of medicine. It includes both public and private health facilities including hospitals, clinics, diagnostic</p>
            </div>
          </div>

        </Container>

      </div>
      <div>
        <Container>
          <div className='flex p-2 m-5 '>
            <div className='w-1/2  mt-2 pt-10'>
              <p className='text-blue-600 font-bold text-4xl'>Who can Register?
              </p>
              <p className='text-xl pt-5'>Doctors from all the system of medicines (Modern medicine, Dentist, Ayurveda, Unani, Siddha, Sowa-Rigpa, Homeopathy) and Nurses can be part of the Healthcare Professional Registry (HPR). The HPR is envisaged to evolve into a citizen-centric and practitioner-centric platform in compliance with global healthcare standards.

              </p>
              <p className='mt-5'>Facility Managers of hospitals, clinics, diagnostic laboratories and imaging centres, pharmacies, blood banks, etc. of both government and private sector.</p>
            </div>
            <div className='w-1/2 mt-2'>
              <img className='w-full' src={healthcare} />
            </div>
          </div>
        </Container>
      </div>


    </>


  )
}

export default Home
