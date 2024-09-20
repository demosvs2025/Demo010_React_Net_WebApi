import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductEdit = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(
        {
            productId: id,
            productName: '',
            description: '',
            color: ''
        });

    useEffect(() => {
        populateProductData();
    }, []);

    const buttonSave_handleClick = (e) => {
        e.preventDefault();
        saveProduct();
    };

    const contents = product === undefined
        ? <p><em>Loading... Please refresh if the product is not loaded. </em></p>
        : <>
            <div>
                <form>
                    <div>
                        <label htmlFor="productName">Product name:</label>
                        <input type="text" name="productName"
                            className="form-control" placeholder="Product name"
                            value={product.productName}
                            onChange={(e) => setProduct({ ...product, productName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description"
                            className="form-control" placeholder="Description"
                            value={product.description}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="color">Color:</label>
                        <input type="text" name="color"
                            className="form-control" placeholder="Color"
                            value={product.color}
                            onChange={(e) => setProduct({ ...product, color: e.target.value })}
                        />
                    </div>
                    <div className="pt-3">
                        <Link to="/products" className="pe-3">
                                <button className="btn btn-primary">Back</button>
                            </Link>
                            <button className="btn btn-primary"
                                onClick={(e) => buttonSave_handleClick(e)}
                            >Save</button>
                    </div>
                </form>
            </div>
        </>;

    return (
        <>
            <div className="container">
                <h3>Edit product</h3>
                <p>
                </p>
                {contents}
            </div>
        </>
    );

    async function populateProductData() {
        const response = await fetch('https://localhost:7056/api/ProductsCalifornia/' + id);
        const data = await response.json();
        setProduct({...product,
            productName: data.productName,
            description: data.description,
            color: data.color});
    }

    async function saveProduct() {
        const item = {
            "productName": product.productName,
            "description": product.description,
            "color": product.color
        };

        const response = await fetch('https://localhost:7056/api/ProductsCalifornia/' + id,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            });

        const data = await response.json();

        if (response.ok && data != null) {
            alert('The product was updated.');
        }
        else {
            alert('Error, the product was not updated.');
        }
    }

}

export { ProductEdit }