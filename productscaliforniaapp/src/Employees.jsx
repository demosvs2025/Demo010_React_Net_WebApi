import { useEffect, useState } from 'react'

const Employees = () => {

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
                            <td><button className="btn btn-primary">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
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
                    <button className="btn btn-primary">New</button>
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
}

export { Employees }