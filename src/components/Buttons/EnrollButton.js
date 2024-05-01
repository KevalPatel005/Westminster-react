import React from "react";

const EnrollButton = () => {
  const handleEnrollClick = () => {
    // Redirect to university enrollment URL (replace with the actual URL)
    window.location.href = "/signUp";
  };

  return (
    <button className="btn btn-primary" onClick={handleEnrollClick}>
      Enroll Now
    </button>
  );
};

export default EnrollButton;
