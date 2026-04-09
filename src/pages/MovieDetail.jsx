import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../assets/componentes/footer/Footer';
import Navbar from '../assets/componentes/navbar/Navbar';

export const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      MovieDetail: {id}
      <Footer />
    </div>
  )

}

export default MovieDetail
