import axios from 'axios';
import React from 'react';
import Button from './components/Button';
import Form from './components/Form';

class App extends React.Component {

  state = { details: [], }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('http://localhost:8000')
      .then(res => {
        this.setState({
          details: res.data
        });
      })
      .catch(err => { })
  }

  render() {
    return (
      <div id="Body">
        <div id="header"><h1>EMPLOYEE DATABASE</h1></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div id="refresh">
          <Button onClick={this.fetchData}/>
        </div>
        <div class="spacer"></div>
        <table>
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Barangay</th>
              <th>Province</th>
              <th>Country</th>
              <th>Zipcode</th>
              <th>Job Designation</th>
              <th>Job Status</th>
              <th>Department</th>
              <th>Department Status</th>
              <th>Employee Type</th>
              <th>Employee Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.details.map((output, id) => (
              <tr key={id}>
                <td class="tableStart">{output.employee_number.employee_num}</td>
                <td>{output.employee_number.first_name}</td>
                <td>{output.employee_number.middle_name}</td>
                <td>{output.employee_number.last_name}</td>
                <td>{output.employee_number.address_line}</td>
                <td>{output.employee_number.barangay}</td>
                <td>{output.employee_number.province}</td>
                <td>{output.employee_number.country}</td>
                <td>{output.employee_number.zipcode}</td>
                <td>{output.designation_id.job_name}</td>
                <td>{output.designation_id.active_status ? 'Active' : 'Inactive'}</td>
                <td>{output.designation_id.department_id.department_name}</td>
                <td>{output.designation_id.department_id.active_status ? 'Active' : 'Inactive'}</td>
                <td>{output.employee_type}</td>
                <td class="tableEnd">{output.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div id="addEmployee">
          <div class="spacer"></div>
          <div >
            <Form/>
          </div>
          <div class="spacer"></div>
        </div>
        <div class="spacer"></div>
      </div>
    )
  }
}

export default App;
