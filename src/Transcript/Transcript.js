import React, { useState } from 'react';
import './transcript.css';
import imgUpload from '../assets/upload-svgrepo-com.png'
import Navbar from '../components/RoundedNavbar';
import RoundedBack from '../components/RoundedBackground';
import putS3 from "../textract/putS3.js";
import startDetection from '../textract/textract.js';
import { useAuth0 } from '@auth0/auth0-react';


// Transcript.js should only ever be reached if the user is authenticated, so that doesn't need to be checked here
const Transcript = () => {
  const {user} = useAuth0();
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");
      const formData = new FormData();
      formData.append("file", file);

      // If this code is uncommented and the rest of the function is unchanged, it succesfully puts
      // the thing into s3
      await putS3(file);
      // The following code also worked on its own
      await startDetection(file.name, user.sub.substring(14));
      
      
      console.log("Calling file here");
    }
  };
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
      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={(e) => handleFileChange(e)} />
      </div>
      {file && <button onClick={handleUpload}>Upload a file</button>}
    </div>
  );
};
export default Transcript;