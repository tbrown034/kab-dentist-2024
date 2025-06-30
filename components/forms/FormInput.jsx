import DialogBox from "@/components/dialogs/InsuranceDialog"; // Added missing import

export const NameInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="name" className="block mb-2 font-medium">
      Name
    </label>
    <input
      name="name"
      type="text"
      id="name"
      value={value}
      onChange={onChange}
      className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      placeholder="John Doe"
      required
    />
  </div>
);

export const EmailInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="email" className="block mb-2 font-medium">
      Email
    </label>
    <input
      name="email"
      type="email"
      id="email"
      value={value}
      onChange={onChange}
      className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      placeholder="email@example.com"
      required
    />
  </div>
);

export const PhoneInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="phone" className="block mb-2 font-medium">
      Phone
    </label>
    <input
      name="phone"
      type="tel"
      id="phone"
      value={value}
      onChange={onChange}
      className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      placeholder="(555) 555-5555"
      required
    />
  </div>
);

export const CityInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="city" className="block mb-2 font-medium">
      City
    </label>
    <input
      name="city"
      type="text"
      id="city"
      value={value}
      onChange={onChange}
      className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      placeholder="Naperville"
      required
    />
  </div>
);

export const InsuranceInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="insurance" className="block mb-2 font-medium">
      Insurance <DialogBox />
    </label>
    <input
      name="insurance"
      type="text"
      id="insurance"
      value={value}
      onChange={onChange}
      className="block w-full p-3 mt-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      placeholder="Insurance Provider"
      required
    />
  </div>
);

export const QuestionInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="question" className="block mb-2 font-medium">
      Question/Issue
    </label>
    <textarea
      name="question"
      id="question"
      value={value}
      onChange={onChange}
      className="block w-full p-3 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500"
      rows="3"
      placeholder="Please describe your question or issue."
      required
    ></textarea>
  </div>
);

export const ReturningPatientInput = ({ value, onChange }) => (
  <div>
    <label htmlFor="returningPatient" className="block mb-2 font-medium">
      Returning Patient?
    </label>
    <div className="flex items-center gap-2">
      <input
        name="returningPatient"
        type="radio"
        id="returningPatientYes"
        value="yes"
        checked={value === "yes"}
        onChange={onChange}
      />
      Yes
      <input
        name="returningPatient"
        type="radio"
        id="returningPatientNo"
        value="no"
        checked={value === "no"}
        onChange={onChange}
      />
      No
    </div>
  </div>
);
