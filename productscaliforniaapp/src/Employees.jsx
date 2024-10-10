import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Employees = () => {

    const buttonDelete_handleClick = (e, firstName, lastName, deleteId) => {
        e.preventDefault();

        if (confirm('Delete the employee ' + firstName + ' ' + lastName + '?')) {
            deleteEmployee(deleteId);
        }
    };

    const [employees, setEmployees] = useState();

    useEffect(() => {
        populateEmployeesData();
    }, []);

    const contents = employees === undefined
        ? <p><em> Loading...Please refresh if the employees are not loaded. </em></p>
        : <>
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.employeeId}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.phone}</td>
                            <td>
                                <Link to={'/employeeedit/' + employee.employeeId}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={(e) => buttonDelete_handleClick(e, employee.firstName, employee.lastName, employee.employeeId)}
                                >Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>;

    return (
        <>
            <div className="container">
                <h3>Employees</h3>
                <p>
                    <Link to="/EmployeeCreate">
                        <button className="btn btn-primary">New</button>
                    </Link>
                </p>
                {contents}
            </div>
        </>
    );

    async function populateEmployeesData() {
        const response = await fetch('https://localhost:7056/api/Employees');
        const data = await response.json();
        setEmployees(data);
    }

    async function deleteEmployee(deleteId) {
        const response = await fetch('https://localhost:7056/api/Employees/' + deleteId,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        if (!response.ok) {
            alert('Error, the employee was not deleted.');
        }
        else {
            alert('The employee was deleted.');
            populateEmployeesData();
        }
    }
}

export { Employees }