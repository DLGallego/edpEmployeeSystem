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
        jobDesignation: '1',
        employeeType: 'Regular',
        employeeStatus: 'Active',
        employeeID: ''
    });

    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/viewJob/')
            .then(res => {
                console.log('Fetched job details:', res.data);
                setJobDetails(res.data);
            })
            .catch(err => {
                console.error('Error fetching job details:', err);
            });
    }, []);

    useEffect(() => {
        console.log('formData:', formData);
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddEmployee = async () => {
        try {
            const jobId = formData.jobDesignation
            const responseJob = await axios.get('http://localhost:8000/updateJob/' + jobId);
            console.log('Job data:', responseJob.data);

            const deptId = responseJob.data.department_id.id;
            const responseDept = await axios.get('http://localhost:8000/updateDept/' + deptId);
            console.log('Department data:', responseDept.data);

            const edData = {
                employee_number: {
                    first_name: formData.firstName,
                    middle_name: formData.middleName,
                    last_name: formData.lastName,
                    address_line: formData.address,
                    barangay: formData.barangay,
                    province: formData.province,
                    country: formData.country,
                    zipcode: formData.zipcode
                },
                designation_id: {
                    department_id: {
                        id: responseJob.data.department_id,
                        department_name: responseDept.data.department_name,
                        active_status: responseDept.data.active_status
                    },
                    job_name: responseJob.data.job_name,
                    active_status: responseJob.data.active_status
                },
                employee_type: formData.employeeType.toUpperCase(),
                status: formData.employeeStatus.toUpperCase()
            }

            console.log(edData);

            // Post to the first URL "localhost:8000/"
            const responseEmployeeDesignation = await axios.post('http://localhost:8000', edData);
            console.log('EmployeeDesignation added successfully:', responseEmployeeDesignation.data);
    
        } catch (error) {
            console.error('Error adding employee or job data:', error);
            // Handle error, display message, or perform other actions
        }
    };

    const handleEditEmployee = async () => {
        try {
            const empData = {
                first_name: formData.firstName,
                middle_name: formData.middleName,
                last_name: formData.lastName,
                address_line: formData.address,
                barangay: formData.barangay,
                province: formData.province,
                country: formData.country,
                zipcode: formData.zipcode,
            };
    
            const responseEmp = await axios.post('http://localhost:8000/updateEmp/' + formData.employeeID, empData);
            console.log('Employee added successfully:', responseEmp.data);

            const jobId = formData.jobDesignation
            const responseJob = await axios.get('http://localhost:8000/updateJob/' + jobId);
            console.log('Job data:', responseJob.data);

            const deptId = responseJob.data.department_id.id;
            const responseDept = await axios.get('http://localhost:8000/updateDept/' + deptId);
            console.log('Department data:', responseDept.data);

            const edData = {
                employee_number: {
                    employee_num: formData.employeeID,
                    first_name: formData.firstName,
                    middle_name: formData.middleName,
                    last_name: formData.lastName,
                    address_line: formData.address,
                    barangay: formData.barangay,
                    province: formData.province,
                    country: formData.country,
                    zipcode: formData.zipcode
                },
                designation_id: {
                    department_id: {
                        id: responseJob.data.department_id,
                        department_name: responseDept.data.department_name,
                        active_status: responseDept.data.active_status
                    },
                    job_name: responseJob.data.job_name,
                    active_status: responseJob.data.active_status
                },
                employee_type: formData.employeeType.toUpperCase(),
                status: formData.employeeStatus.toUpperCase()
            }

            console.log(edData);

            const desigID = parseInt(formData.employeeID, 10) - 100;

            console.log(desigID);
            // Post to the first URL "localhost:8000/"
            const responseEmployeeDesignation = await axios.post('http://localhost:8000/updateEd/' + desigID, edData);
            console.log('EmployeeDesignation added successfully:', responseEmployeeDesignation.data);

            console.log(responseEmp.data);
        } catch (error) {
            console.error('Error editing employee or job data:', error);
            // Handle error, display message, or perform other actions
        }
    };

    const handleDeleteEmployee = async () => {
        try {
            const empData = '';

            const responseEmp = await axios.post('http://localhost:8000/deleteEmp/' + formData.employeeID, empData);
            console.log('Employee Deleted successfully:', responseEmp.data);
        } catch (error) {
            console.error('Error editing employee or job data:', error);
            // Handle error, display message, or perform other actions
        }
    };

    return (
        <div id="body">
            <h1>Employee Form</h1>

            <div id="formBody">
                <div class="column">
                    <div class="field">
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </div>
                    <div class="field">
                        <label>Middle Name:</label>
                        <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} />
                    </div>
                    <div class="field">
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                    </div>
                    <div class="field">
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />  
                    </div>
                    <div class="field">
                        <label>Barangay:</label>
                        <input type="text" name="barangay" value={formData.barangay} onChange={handleInputChange} />
                    </div>
                </div>

                <div class="column">
                    <div class="field">
                        <label>Province:</label>
                        <input type="text" name="province" value={formData.province} onChange={handleInputChange} />
                    </div>
                    <div class="field">
                        <label>Country:</label>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
                    </div>
                    <div class="field">
                        <label>Zipcode:</label>
                        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange} />
                    </div>              
                </div>
                
                <div class="column">
                <div class="field">
                        <label>Job Designation:</label>
                        <select name="jobDesignation" value={formData.jobDesignation} onChange={handleInputChange}>
                            {jobDetails.map((output) => (
                                <option key={output.id} value={output.id}>
                                {output.job_name}
                                </option>
                            ))}
                        </select>
                    </div> 
                    <div class="field">
                        <label>Employee Type:</label>
                        <select name="employeeType" value={formData.employeeType} onChange={handleInputChange}>
                            <option value="Regular">Regular</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Probation">Probation</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Employee Status:</label>
                        <select name="employeeStatus" value={formData.employeeStatus} onChange={handleInputChange}>
                            <option value="Active">Active</option>
                            <option value="Resigned">Resigned</option>
                            <option value="AWOL">AWOL</option>
                        </select>
                    </div>
                    <br/>
                    <div class="field">
                        <div id="editField">
                            <label>Employee#:</label>
                            <input type="text" name="employeeID" value={formData.employeeID} onChange={handleInputChange}/>
                            <button className="formButton" onClick={handleEditEmployee}>Edit</button>
                            <button className="formButton" onClick={handleDeleteEmployee}>Delete</button>
                        </div>
                        <button className="formButton" onClick={handleAddEmployee}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
