import React, { useEffect, useRef, useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const ref = useRef([]);
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleKeyDown = (e, index) => {
    const copyOptFields = [...otpFields];
    const key = e.key;
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }
    if (key === "Backspace") {
      copyOptFields[index] = "";
      setOtpFields(copyOptFields);
      if (index > 0) ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) return;
    copyOptFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setOtpFields(copyOptFields);
  };

  return (
    <>
      <h1>Otp</h1>
      {otpFields.map((value, index) => (
        <input
          readOnly
          ref={(currInput) => (ref.current[index] = currInput)}
          className="otp-input"
          type="text"
          key={index}
          value={value}
          onKeyDown={(e) => handleKeyDown(e, index)}
          aria-label={`OTP digit ${index + 1} of ${otpLength}`}
        />
      ))}
    </>
  );
};

export default Otp;
