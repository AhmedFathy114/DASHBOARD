import React from "react";
import OTPForm from "../../../Components/OTPDoneForm/OTPForm.jsx";

export default function WDoneservice({ setShowDoneForm }) {
  return (
    <>
      <div
        className="text-center py-5 otp-container animate-pop"
        onClick={() => setShowDoneForm(false)}
      >
        <OTPForm onClose={() => setShowDoneForm(false)} />
      </div>
    </>
  );
}
