import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const buttonDelete_handleClick = (e, productName, deleteId) => {
        e.preventDefault();

        if (confirm('Delete the product ' + productName + '?')) {
            deleteProduct(deleteId);
        }
    };

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
                            <td>
                                <Link to={'/productedit/' + product.productId}>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={(e) => buttonDelete_handleClick(e, product.productName, product.productId)}
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
                <h3>Products</h3>
                <p>
                    <Link to="/ProductCreate">
                        <button className="btn btn-primary">New</button>
                    </Link>
                </p>
                {contents}
            </div>
        </>
    );

    async function populateProductsData() {
        const response = await fetch('https://localhost:7056/api/ProductsCalifornia');
        const data = await response.json();
        setProducts(data);
    }
    async function deleteProduct(deleteId) {
        const response = await fetch('https://localhost:7056/api/ProductsCalifornia/' + deleteId,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        if (!response.ok)
        {
            alert('Error, the product was not deleted.');
        }
        else
        {
            alert('The product was deleted.');
            populateProductsData();
        }
        
    }

}

export { Products } 