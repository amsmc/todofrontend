import { Link } from "react-router-dom";

function Product() {
    const products = [
        { id: 1, name: "Produk A" },
        { id: 2, name: "Produk B" },
    ];

    return (
        <div className="grid grid-cols-3 px-6 py-20 gap-4">
            {products.map((item) => (
                <div className="card bg-base-100 w-96 shadow-sm" key={item.id}>
                    <figure>
                        {/* Product image would go here */}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>
                            Sigma
                        </p>
                        <div className="card-actions justify-end">
                            <Link to={`/product/${item.id}`} className="btn btn-primary">
                                Buy Now
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;