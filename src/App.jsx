import "./App.css";
import RightImage from "./assets/3129492.jpg";

import DropFileInput from "./components/drop-file-input/DropFileInput";
// import Spline from "@splinetool/react-spline";
import Navbar from "./components/Navbar/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/FAQ/Faqs";
import VideoComponent from "./components/Video/VideoComponent";
import Loader from "./components/Loader/Loader";
import Example from "./components/Newsletter/Example";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const containerStyle = {
    width: "200px", // set the desired width
    height: "200px", // set the desired height
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className='main-conatiner'>
            <div className='body-container'>
              <div className='box'>
                <DropFileInput onFileChange={(files) => onFileChange(files)} />
              </div>
              <img
                src={RightImage}
                alt='right'
                style={{ width: 500 }}
                className='image-right'
              />
              {/* <div style={containerStyle}>
            <Spline scene='https://prod.spline.design/xHOPfq7FLhHJO1vh/scene.splinecode' />
          </div> */}
            </div>
            <About />
            <VideoComponent />
            <Faqs />
            <Example />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
