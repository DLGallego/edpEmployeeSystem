import React from 'react'

const Signatories = () => {
    return (
        <div id="body">
            <h1>Signatories Form</h1>

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
                        <label>Higher Superior:</label>
                        <select name="superior">
                            <option value="1">101</option>
                            <option value="2">102</option>
                            <option value="3">103</option>
                            <option value="4">104</option>
                        </select>
                    </div>
                    <div class="field">
                        <label>Status:</label>
                        <select name="status">
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div class='column'>
                    <div class="field">
                        <div id="editField">
                            <label>Signatory#:</label>
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

export default Signatories