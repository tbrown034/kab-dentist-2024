"use client";

const EmergencyFormText = ({ isSubmitted }) => (
  <>
    <h2 className="text-2xl font-extrabold tracking-tight">
      Request Emergency Consultation
    </h2>
    <p>
      If it's after hours or the weekend and you are experiencing a dental
      emergency, fill out the form below. If Dr. Brown is on-call and available,
      we offer free phone consultations to discuss your issue and options moving
      forward.
    </p>
    {isSubmitted ? (
      <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-green-50">
        <h3 className="text-xl font-bold">
          Your message has been successfully sent!
        </h3>
        <p>We will be in touch with you shortly.</p>
        <p>
          IMPORTANT: If you are experiencing a life-threatening emergency, call
          911 immediately or go to the nearest emergency room.
        </p>
      </div>
    ) : null}
  </>
);

export default EmergencyFormText;
