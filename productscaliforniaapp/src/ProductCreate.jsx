import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ProductCreate = () => {

    const { id } = 0;

    const navigate = useNavigate();

    const [product, setProduct] = useState(
        {
            productId: id,
            productName: '',
            description: '',
            color: ''
        });

    const buttonSave_handleClick = (e) => {
        e.preventDefault();
        saveProduct();
    };

    const contents = <>
            <div>
                <form>
                    <input type="hidden" name="productId"
                        className="form-control"
                        value={product.productId}
                        onChange={(e) => setProduct({ ...product, productId: e.target.value })}
                    />
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
                <h3>New product</h3>
                <p>
                </p>
                {contents}
            </div>
        </>
    );

    async function saveProduct() {
        const item = {
            "productName": product.productName,
            "description": product.description,
            "color": product.color
        };

        const response = await fetch('https://localhost:7056/api/ProductsCalifornia/',
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
            setProduct({
                ...product,
                productId: data.productId,
                productName: data.productName,
                description: data.description,
                color: data.color
            });
            alert('The product was saved.');
            navigate("/products");
        }
        else {
            alert('Error, the product was not saved.');
        }
    }
}

export { ProductCreate }