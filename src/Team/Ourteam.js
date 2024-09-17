import React, { useState, useEffect } from "react";
import "./Ourteam.css"; // Import the CSS file

// Sample team data
const teamMembers = [
  {
    name: "Mr. Sambit Biswal",
    designation: "Founder and CEO",
    bio: `Mr. Sambit, the visionary leader behind RSB Healthcare Consulting, brings a wealth of expertise to his role as Founder, President, and CEO. With a distinguished career as an industry expert in Healthcare Operations, he has consistently demonstrated his ability to drive growth and innovation in the healthcare sector.
    As a strategic advisor and business analyst, Mr. Sambit has guided numerous leading organizations to success. His unique blend of skills in business consulting and customer-focused services has enabled companies to achieve remarkable organic and inorganic growth. Under his leadership, RSB Healthcare Consulting has developed cutting-edge AI models that empower clients to make more accurate revenue projections and deliver enhanced quality care.
    His commitment to excellence is evident in the company’s motto: “Your Trust is Our Priority.” This dedication translates into a relentless focus on delivering quality services, meeting rigorous SLAs, and adhering to industry standards. His strategic vision has led to the successful automation of manually-driven RCM processes, significantly improving operational efficiency for clients.
    With a track record of increasing customer satisfaction and retention rates by over 90% in previous roles, Sambit continues to leverage his team’s expertise to create substantial value for clients and stakeholders in the US healthcare landscape. His multifaceted experience across various industry verticals positions him uniquely to lead and drive successful business operations in the ever-evolving healthcare consulting space.
    As a healthcare consultant and an expert in the domain, Mr. Sambit helps US healthcare clients with their business growth, strategic management, and operations. Under his leadership and with the tireless efforts of his team, he has automated the manually driven RCM process in all possible aspects. With the help of AI and RPA, he has created micro-services that assist providers or RCM vendors in performing credentialing and contracting, auto-eligibility verification, auto claims submission, data migration, auto claim status, and digitalization of paper bills using OCR. His AI-driven analytics tool, loaded with various metrics and business insights, provides clients with a transparent process overview. Apart from technical products and services designed for RCM, he has proven expertise in clinical image interpretation, market analysis, genetic panel approvals, technical assessment, and setting up PLA and Z codes.`,
    imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-27-at-1.19.14-AM.jpeg", // replace with actual image URL
  },
  {
    name: "Mr. Soumya Mohanty",
    designation: "Chief Technology Officer",
    bio: "Mr. Soumya is the AI Scientist with a MS in Computer Science from Northeastern University Boston, specializing in Artificial Intelligence. He has 5+ years of extensive experience in developing and deploying AI applications for medical applications. Soumya has led teams to successfully create and launch inference engines for various modalities such as IVOCT, Echo, and MRI, 3 of which were awarded FDA approval for clinical use.Soumya has also designed and implemented frameworks for NLP, RL, Computer Vision, and blockchains. He is currently engaged at Subtle Medical Inc. as a Machine Learning Software Consultant, where he is responsible for building a CI/CD product pipeline for deploying AI models into production",
    imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/06/IMG-20240619-WA0030.jpg", // replace with actual image URL
  },
  {
    name: "Mr. Bobby Garcia",
    designation: "Chief Advisory Consultant",
    bio: "With over 20 years of successful sales experience as a distinguished sales leader in the healthcare industry, Mr. Bobby has consistently demonstrated exceptional leadership and a remarkable track record of driving revenue growth and exceeding corporate sales objectives. Throughout his career, he has excelled at building and nurturing strong client relationships, hiring and developing successful sales teams, and negotiating nationwide contracts.Most recently, he served as a Sales Growth Consultant. Mr. Bobby, assisting start-up companies, assisted with developing and implementing successful sales strategies, managing sales processes, and training sales representatives. His expertise in aligning KPIs with corporate growth expectations and consulting with third-party vendors for CRM implementation and sales analytics has proven invaluable to clients",
    imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/08/Untitled-design-10.png", // replace with actual image URL
  },
  {
    name: "Mr. Anzin Saifuddin",
    designation: "Director Coding and Compliances",
    bio: "Anzin, CCS, CPC, CDIP is an expert, detail oriented and process driven medical coding professional with 17+ years of significant experience in USA, the Middle East, and the Indian subcontinent.Anzin has led business critical initiatives, providing oversight and direction to multi-disciplinary teams across operations, coding, clinical documentation improvement, decision support, quality, Compliance, and Health information Management.",
    imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/04/Mr.-Anzin.png",
  },
  {
    name: "Mr. Mohammed Safeer",
    designation: "Head of Business Operations",
    bio: "Boasting a distinguished career spanning over 17 years in the US Healthcare provider operations realm, encompassing Hospital, Physician, and Lab Billing processes, Safeer has been instrumental in overseeing end-to-end operations. Safeer has successfully managed international medical tourism and billing for hospital and ambulance [ground & air] services.Boasting a distinguished career spanning over 17 years in the US Healthcare provider operations realm, encompassing Hospital, Physician, and Lab Billing processes, Safeer has been instrumental in overseeing end-to-end operations. Safeer has successfully managed international medical tourism and billing for hospital and ambulance [ground & air] services.",
    imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/04/Mr.-Safeer.jpg",
  },
  {
    name: "Mr. Rajeev Kukade",
    designation: "Business Strategy and Control",
    bio: "An industry veteran with 3 decades of experience in operations & delivery management of healthcare operations for ‘Provider and Payor’ operations.Rajeev has been instrumental in establishing multiple companies from Mumbai – the financial capital of India and has scaled operations teams from 5 to 500 employees for Coding, Billing, and AR-Collections. He has also set up a team of 900 professionals spread across two locations Mumbai and Chennai, for the third largest Insurance Company in the US for processing a million claims per day. The team was able to accurately capture claims to ensure auto-adjudication was more than 85%.",
 imageUrl:
      "https://rsbhealthcareconsulting.com/wp-content/uploads/2024/04/Mr.-Rajeev.png",
  },

  // Add more team members here
];

const TeamPage = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);
  const [showFullBio, setShowFullBio] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        setShowFullBio(false); // Reset to show less when member changes
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup interval
    }
  }, [isPaused, currentMemberIndex]);

  // Memoizing the current team member to avoid unnecessary re-renders
  const currentMember = teamMembers[currentMemberIndex];

  const toggleBio = () => {
    setShowFullBio((prevShowFullBio) => !prevShowFullBio);
    setIsPaused((prevIsPaused) => !prevIsPaused); // Pause auto-rotation when 'Show more' is clicked
  };

  const shortBio = currentMember.bio.slice(0, 200) + "..."; // Display only the first 200 characters

  // Handle manual navigation
  const goToNextMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    setShowFullBio(false);
    setIsPaused(false); // Resume auto-rotation
  };

  const goToPreviousMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    setShowFullBio(false);
    setIsPaused(false); // Resume auto-rotation
  };

  return (
    <div className="team-container">
      <h1 className="team-heading">Our Team</h1>
      <div className="team-section">
        {/* Left side: Rotating team member image */}
        <div className="image-section">
          <button className="prev-arrow" onClick={goToPreviousMember}>←</button> {/* Left Arrow */}
          <img
            src={currentMember.imageUrl}
            alt={currentMember.name}
            className="team-image"
            key={currentMember.imageUrl} // This ensures that image re-renders correctly when member changes
          />
          <button className="next-arrow" onClick={goToNextMember}>→</button> {/* Right Arrow */}
        </div>

        {/* Right side: Member details */}
        <div className="details-section">
          <h2>{currentMember.name}</h2>
          <p>{currentMember.designation}</p>
          <p className="team-bio">
            {showFullBio ? currentMember.bio : shortBio}
            <button className="toggle-bio-btn" onClick={toggleBio}>
              {showFullBio ? "Show less" : "Show more"}
            </button>
          </p> {/* Bio section */}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;