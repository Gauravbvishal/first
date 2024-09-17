import React from "react";
import "./AboutPage.css"; // Import the CSS file for styling
import pic1 from "../Assets/photos.jpg";
import boxImage1 from "../Assets/doctor.jpg"; // Import additional images
import boxImage2 from "../Assets/p3.jpg";
import boxImage3 from "../Assets/p4.jpg";
import boxImage4 from "../Assets/p5.jpg";
import boxImage5 from "../Assets/p6.jpg";
import boxImage6 from "../Assets/p7.jpg"
// import companyImage from "../Assets/RSB-LOGO.png"; // Path to your company image

export default function AboutPage() {
  return (
    <>
      <div className="about-container">
        <header className="about-header">
          <h1>About Our Company</h1>
        </header>
        <section className="about-content">
          <p>
            Welcome to [Your Company Name]! Our mission is to [describe your
            mission]. We strive to [mention key goals or objectives], ensuring
            that our clients receive the best [products/services] tailored to
            their needs.
          </p>
          <div className="about-div-img">
            <img src={pic1} alt="About Our Company" className="about-image" />
          </div>
        </section>
        <section className="mission-section">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to drive innovation and deliver exceptional results
              for our clients. We focus on providing top-notch services and
              products that cater to the evolving needs of the market. By
              harnessing the latest technologies and leveraging our expertise,
              we aim to create value and ensure customer satisfaction.
            </p>
          </div>
          <div className="additional-text">
            <h2>More About Us</h2>
            <p>
              Our company was founded on the principles of integrity,
              innovation, and customer -centricity. With a rich history of
              success, we have established ourselves as a leader in our
              industry. We continuously strive to enhance our offerings and
              adapt to the changing landscape.
            </p>
          </div>
        </section>
        <section className="gallery-section">
          <h2>Our Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-box">
              {/* <img
              src={companyImage}
              alt="About Our Company"
              className="about-image"
            /> */}
              <img src={boxImage1} alt="Gallery Item 1" />
              <div className="overlay">
                <h3>Heading 1</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
            <div className="gallery-box">
              <img src={boxImage2} alt="Gallery Item 2" />
              <div className="overlay">
                <h3>Heading 2</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
            <div className="gallery-box">
              <img src={boxImage3} alt="Gallery Item 3" />
              <div className="overlay">
                <h3>Heading 3</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
            <div className="gallery-box">
              <img src={boxImage4} alt="Gallery Item 4" />
              <div className="overlay">
                <h3>Heading 4</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
            <div className="gallery-box">
              <img src={boxImage5} alt="Gallery Item 5" />
              <div className="overlay">
                <h3>Heading 5</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
            <div className="gallery-box">
              <img src={boxImage6} alt="Gallery Item 6" />
              <div className="overlay">
                <h3>Heading 6</h3>
                <p>Some text about this image.</p>
              </div>
            </div>
          </div>
          <br />
        </section>
       </div>
    </>
  );
}
