const transporter = require("../config/emailConfig");
const OTP = require("../models/OTP");
const generateOTP = require("./generateOTP");

// Send OTP Email Function
const sendEmail = async (user) => {
  // Generate OTP
  const otp = generateOTP();

  // Delete old OTP if exists
  await OTP.deleteMany({ userId: user._id });

  // Save new OTP in database
  await OTP.create({
    userId: user._id,
    otp,
  });

  // Send email
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,

    to: user.email,

    subject: "Email Verification OTP",

    html: `
      <div style="
        max-width:600px;
        margin:auto;
        font-family:Arial, sans-serif;
        background:#f4f4f4;
        padding:40px 20px;
      ">

        <div style="
          background:white;
          padding:40px;
          border-radius:10px;
          text-align:center;
          box-shadow:0 0 10px rgba(0,0,0,0.1);
        ">

          <h1 style="
            color:#4a90e2;
            margin-bottom:20px;
          ">
            Email Verification
          </h1>

          <p style="
            font-size:16px;
            color:#555;
          ">
            Hello <b>${user.name}</b>,
          </p>

          <p style="
            font-size:15px;
            color:#666;
            line-height:1.6;
          ">
            Thank you for registering with our platform.
            Please use the OTP below to verify your email address.
          </p>

          <div style="
            margin:30px 0;
          ">
            <span style="
              display:inline-block;
              background:#4a90e2;
              color:white;
              padding:15px 40px;
              font-size:32px;
              letter-spacing:5px;
              border-radius:8px;
              font-weight:bold;
            ">
              ${otp}
            </span>
          </div>

          <p style="
            color:#999;
            font-size:14px;
          ">
            This OTP is valid for 15 minutes.
          </p>

          <p style="
            color:#999;
            font-size:14px;
            margin-top:30px;
          ">
            If you did not request this verification,
            please ignore this email.
          </p>

        </div>

      </div>
    `,
  });
};

module.exports = sendEmail;
