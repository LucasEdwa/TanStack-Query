import { useParams } from "react-router-dom";
import { getProduct } from "../lib/queries/getProduct";
import { useQuery } from "@tanstack/react-query";


export default function Product() {
    const { id } = useParams();
    const product = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id)
    })
    return (
        <div className="p-10 bg-yellow-500">
            {product.isLoading ? <div>Loading product...</div>:null}
            {product.isError ? <div>Error fetching product</div>:null}
            {product.isSuccess ? <div>
                <h1  className="text-2xl">{product.data.title}</h1>
                <p>{product.data.description}</p>
                <p>{product.data.price} kr</p>
                <p>{product.data.category}</p>
            </div>:null}
        </div>
    );
    }