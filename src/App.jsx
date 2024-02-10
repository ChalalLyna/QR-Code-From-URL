import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const[url, setUrl] = useState("");
  const [imgPath, setImgPath] = useState(""); // QR code image path
  
  useEffect(() => {
    setImgPath(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`);
  }, [url]); // Update imgPath whenever url changes
  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setUrl(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <>
    <h1>QR Code Generator</h1>
    <h3>drop your URL and a QR Code will be generated automatically</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter you URL</label>
        <input type="text" id="url" value={url} onChange={handleInputChange}/>
      </form>
      <QRCode imgPath={imgPath} />
    </>
  )
}

function QRCode(props){
  return(
    <img src={props.imgPath} alt="QR Code" />
  );
}
