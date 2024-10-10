import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Products } from './Products'
import { ProductCreate } from './ProductCreate'
import { ProductEdit } from './ProductEdit'
import { Employees } from './Employees'
import { EmployeeCreate } from './EmployeeCreate'
import { EmployeeEdit } from './EmployeeEdit'

function App() {

    return (
        <>
            <h5>California business</h5>
            <div className="App">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route path="/productcreate" element={<ProductCreate />} />
                    <Route path="/productedit/:id" element={<ProductEdit />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employeecreate" element={<EmployeeCreate />} />
                    <Route path="/employeeedit/:id" element={<EmployeeEdit />} />
                </Routes>
            </div>
        </>
    );

}

export default App