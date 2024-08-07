import Link from "next/link";

const getData = async (id) => {
    const res = await fetch('http://dummyjson.com/products/' + id)
    const data = await res.json()
    return data
}


async function Product({params: { id }}){
    const product = await getData(id)

    return(
        <div className="max-container">
        <div className="mt-5">
            <Link className="underline" href='/'>Go Back</Link>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <img src={product.thumbnail} className="w-[600px]" alt="" />
            </div>
            <div className="mt-10">
                <h1 className="text-3xl mb-3 font-bold">{product.title}</h1>
                <span className="uppercase font-bold tracking-[3px] text-amber-500">{product.category}</span>
                <p className="font-bold tracking-[2px] mb-3 text-red-500">{product.brand}</p>
                <p><strong>Rating:</strong> {product.rating}⭐</p>
                <p className="w-[400px] mt-8 ">{product.description}</p>
                <p className="font-bold text-2xl mt-5 mb-5">${product.price}</p>
                <h3>Other informations:</h3>
                <p><strong>Shipping:</strong>  {product.shippingInformation}</p>
                <p><strong>Warranty Information:</strong>  {product.warrantyInformation}</p>
                <p><strong>Availability Status:</strong>  {product.availabilityStatus}</p>
                <p><strong>Return Policy:</strong>  {product.returnPolicy}</p>
            </div>
        </div>
    </div>
    )
}

export default Product;