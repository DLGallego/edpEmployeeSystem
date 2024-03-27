import React from 'react'

const Leave = () => {
    return (
        <div id="body">
            <h1>Leave Form</h1>

            <div id="formBody">
                <div class="column">
                    <div class="field">
                    <label>Employee ID:</label>
                        <select name="employeeID">
                            <option value="1">101</option>
                            <option value="2">102</option>
                            <option value="3">103</option>
                            <option value="4">104</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Start Leave:</label>
                        <input type="date" name="start" />
                    </div>
                    <div class="field">
                        <label>End Leave:</label>
                        <input type="date" name="end" />
                    </div>
                    <div class="field">
                        <label>Leave Type:</label>
                        <select name="employeeType">
                            <option value="vacation">Vacation Leave</option>
                            <option value="sick">Sick Leave</option>
                            <option value="maternity">Maternity Leave</option>
                            <option value="paternity">Paternity Leave</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Status:</label>
                        <select name="status">
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="denied">Denied</option>
                        </select>
                    </div>
                </div>
                <div class='column'>
                    <div class="field">
                        <div id="editField">
                            <label>Leave Request ID:</label>
                            <input type="text" name="id" />
                            <button className="formButton">Edit</button>
                            <button className="formButton">Delete</button>
                        </div>
                        <button className="formButton">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leave