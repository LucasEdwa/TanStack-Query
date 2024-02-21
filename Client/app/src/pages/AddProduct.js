import { useMutation } from '@tanstack/react-query';
import { postProduct } from '../lib/mutations/postProduct';
import { useState } from 'react';

export default  function AddProduct() {
    const [formData, setFormData] = useState("");
    const newProduct = useMutation({
        mutationFn: () => postProduct({title: formData}),
    })

    return (
        <div className="flex flex-col">
            <h1 className="mb-8 p-7 bg-red-400">Add Product</h1>
            <p>Welcome to the add product page!</p>
            <input value={formData} onChange={(e) => setFormData(e.target.value)} type="text" placeholder="Title" className="border-2 p-2 m-2"/>
            {newProduct.isError ? <div className="bg-red-600 p-2 text-center rounded-full ">Error adding product</div>:null}
            {newProduct.isLoading ? <div>Adding product...</div>:null}
            {newProduct.isSuccess ? <div className="bg-green-600 p-2 text-white text-center rounded-full ">Product " {newProduct.data.title} " was added successfully!</div>:null}
            <button onClick={newProduct.mutate} className="bg-red-500 hover:bg-red-800 rounded-3xl text-white p-2 m-2">Add Product</button>
        </div>
    );
    }