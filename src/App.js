// src/App.js
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const interestsList = ["Technology", "Design", "Business"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    let updated = [...formData.interests];

    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((i) => i !== value);
    }

    setFormData({ ...formData, interests: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <div>
            {interestsList.map((interest) => (
              <div key={interest}>
                <label>
                  <input
                    type="checkbox"
                    value={interest}
                    onChange={handleCheckbox}
                    aria-label={interest}
                  />
                  {interest}
                </label>
              </div>
            ))}
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you, {formData.name}!</h2>
          {formData.interests.length > 0 && (
            <p>You selected: {formData.interests.join(", ")}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
