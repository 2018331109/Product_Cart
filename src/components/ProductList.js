import '../App.css';

function ProductList({ product, addToCart }) {
    return (
        <div className='flex'>
            {product.map((productItem, productIndex) => (
                <div key={productIndex} style={{ width: '33%' }}>
                    <div className='product-item'>
                        <img src={productItem.url} alt={productItem.name} width="100%" />
                        <p>{productItem.name} | {productItem.category}</p>
                        <p>{productItem.seller}</p>
                        <p>{productItem.price} taka/-</p>
                        <button onClick={() => addToCart(productItem)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
