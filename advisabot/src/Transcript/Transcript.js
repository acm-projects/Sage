import React from 'react';
import './transcript.css';
import imgUpload from '../assets/upload-svgrepo-com.png'
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';

const Transcript = () => {
  return (
    <div className='upload'>
      <RoundedBack />
      <Navbar />
        <div className='text'>
            <h3>upload transcript</h3>
            <h2>drag and drop or upload your transcript <br /> to create your degree plan</h2>
            <div className='img'>
                <img src={imgUpload} alt="imgupload" className='transcriptimage' />
            </div>
        </div>
        <div className='symbol'>
            <button type="submit">upload</button>
        </div>
    </div>
  )
}

export default Transcript;