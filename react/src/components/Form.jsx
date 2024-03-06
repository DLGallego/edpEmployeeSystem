import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Form.css';

const EmployeeForm = () => {

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
    
    // State to store job details
    const [jobDetails, setJobDetails] = useState([]);

    // Effect to fetch job details on component mount
    useEffect(() => {
        axios.get('http://localhost:8000/viewJob/')
            .then(res => {
                console.log('Fetched job details:', res.data); // Add this line to check the fetched data
                setJobDetails(res.data);
            })
            .catch(err => {
                console.error('Error fetching job details:', err);
            });
    }, []);

    // Function to handle form input changes
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
    e.preventDefault();

    // Your form submission logic here
    console.log('Form submitted:', formData);
    };

    return (
        <div id="formBody">
            <h1>Add Employee</h1>

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
                        <select name="jobDesignation" value={formData.jobDesignation} onChange={handleInputChange}>
                            {jobDetails.map((output) => (
                                <option key={output.id} value={output.job_name}>
                                {output.job_name}
                                </option>
                            ))}
                        </select>
                        <label id="jobStatusField">
                            <input id="checkBox" type="checkbox" name="jobStatus" checked={formData.jobStatus} onChange={(e) => setFormData({ ...formData, jobStatus: e.target.checked })} />
                            Active
                        </label>
                    </div>
                </div>
                
                <div class="column">
                    <div class="labels">
                        <label>Employee Type:</label>
                        <br/>
                        <label>Employee Status:</label>
                    </div>

                    <div class="formField">
                        <select name="employeeType" value={formData.employeeType} onChange={handleInputChange}>
                            <option value="Regular">Regular</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Probation">Probation</option>
                        </select>
                        <br/>
                        <select name="employeeStatus" value={formData.employeeStatus} onChange={handleInputChange}>
                            <option value="Active">Active</option>
                            <option value="Resigned">Resigned</option>
                            <option value="AWOL">AWOL</option>
                        </select>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <button id="formButton" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
