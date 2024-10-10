import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const EmployeeCreate = () => {

    const { id } = 0;

    const navigate = useNavigate();

    const [employee, setEmployee] = useState(
        {
            employeeId: id,
            firstName: '',
            lastName: '',
            phone: ''
        });

    function form_handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const employeeDto = Object.fromEntries(formData.entries());

        saveEmployee(employeeDto);
    }

    const contents = <>
        <div>
            <form onSubmit={form_handleSubmit}>
                <input type="text" name="employeeId"
                    defaultValue={employee.employeeId}
                    className="form-control"
                />
                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" name="firstName"
                        defaultValue={employee.firstName}
                        className="form-control" placeholder="First name"
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" name="lastName"
                        defaultValue={employee.lastName}
                        className="form-control" placeholder="Last name"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone"
                        defaultValue={employee.phone}
                        className="form-control" placeholder="Phone"
                    />
                </div>
                <div className="pt-3">
                    <Link to="/employees" className="pe-3">
                        <button className="btn btn-primary">Back</button>
                    </Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </>;

    return (
        <>
            <div className="container">
                <h3>New employee</h3>
                <p>
                </p>
                {contents}
            </div>
        </>
    );

    async function saveEmployee(employeeDto) {
        const item = {
            "firstName": employeeDto.firstName,
            "lastName": employeeDto.lastName,
            "phone": employeeDto.phone
        };

        const response = await fetch('https://localhost:7056/api/Employees/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item) 
            });

        const data = await response.json();

        if (response.ok && data != null) {
            setEmployee({
                ...employee,
                employeeId: data.employeeId,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone
            });
            alert('The employee was saved.');
            navigate("/employees");
        }
        else {
            alert('Error, the employee was not saved.');
        }
    }

}

export { EmployeeCreate }