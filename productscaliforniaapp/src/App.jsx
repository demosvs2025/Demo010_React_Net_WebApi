import { useEffect, useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
    
    const [products, setProducts] = useState();

    useEffect(() => {
        populateProductsData();
    }, []);

    const contents = products === undefined
        ? <p><em>Loading... Please refresh if the products are not loaded. </em></p>
        : <>
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Description</th>
                        <th>Color</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.productId}>
                            <td>{product.productName}</td>
                            <td>{product.description}</td>
                            <td>{product.color}</td>
                            <td><button className="btn btn-primary">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>;

    return (
        <div className="container">
            <h1 id="tableLabel">Products from California</h1>
            <p>
                <button className="btn btn-primary">New</button>
            </p>
            {contents}
        </div>
    );

    async function populateProductsData() {
        const response = await fetch('https://localhost:7056/api/ProductsCalifornia');
        const data = await response.json();
        setProducts(data);
    }
}

export default App