import React, { useState } from "react";

function StudReg() {
  // Step 1: Create a single state object for all fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    travelers: 1,
    date: ""
  });

  // Step 2: Generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,   // keep existing values
      [name]: value  // update only the changed field
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking for ${formData.name} to ${formData.destination} on ${formData.date}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Destination:</label>
        <input 
          type="text" 
          name="destination" 
          value={formData.destination} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Number of Travelers:</label>
        <input 
          type="number" 
          name="travelers" 
          value={formData.travelers} 
          onChange={handleChange} 
        />
      </div>

      <div>
        <label>Date:</label>
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
        />
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default StudReg;
