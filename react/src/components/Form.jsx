import React, { useState } from 'react';
import './Form.css';

const EmployeeForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    barangay: '',
    province: '',
    country: '',
    zipcode: '',
    jobDesignation: '',
    jobStatus: '',
    department: '',
    employeeType: '',
    employeeStatus: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission (you can replace this with your logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>

        <div class="column">
            <div class="labels">
                <label>First Name:</label>
                <br/>
                <label>Middle Name:</label>
                <br/>
                <label>Last Name:</label>
                <br/>
                <label>Address:</label>
                <br/>
                <label>Barangay:</label>
            </div>

            <div class="formField">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
                <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} />  
                <input type="text" name="barangay" value={formData.barangay} onChange={handleInputChange} />
            </div>
        </div>

        <div class="column">
            <div class="labels">
                <label>Province:</label>
                <br/>
                <label>Country:</label>
                <br/>
                <label>Zipcode:</label>
                <br/>
                <label>Job Designation:</label>
                <br/>
                <label>Job Status:</label>
            </div>

            <div class="formField">
                <input type="text" name="province" value={formData.province} onChange={handleInputChange} />
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
                <input type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
                <input type="text" name="jobDesignation" value={formData.jobDesignation} onChange={handleInputChange} />
                <label>
                    <input id="checkBox" type="checkbox" name="jobStatus" checked={formData.jobStatus} onChange={(e) => setFormData({ ...formData, jobStatus: e.target.checked })} />
                    Active
                </label>
            </div>
        </div>
        
        <div class="column">
            <div class="labels">
                <label>Department:</label>
                <br/>
                <label>Employee Type:</label>
                <br/>
                <label>Employee Status:</label>
            </div>

            <div class="formField">
                <input type="text" name="department" value={formData.department} onChange={handleInputChange} />
                <input type="text" name="employeeType" value={formData.employeeType} onChange={handleInputChange} />
                <input type="text" name="employeeStatus" value={formData.employeeStatus} onChange={handleInputChange} />
                <br/>
                <br/>
                <button id="formButton" type="submit">Submit</button>
            </div>
        </div>
    </form>
  );
};

export default EmployeeForm;
