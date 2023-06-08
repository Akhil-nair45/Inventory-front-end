import React, { useState } from 'react'
import ProductService from '../Service/ProductService';
import Navbar from './Navbar';

const AddProduct = () => {
    const [product, setProduct]= useState({
        productName:"",
        description:"",
        price:"",
        quantity:""
    });

    const [msg, SetMsg]=useState("");

    const handleChange  =(e)=>{
        const value= e.target.value;
        setProduct({...product, [e.target.name]: value});
    };

    const ProductRegister = (e) =>{
        e.preventDefault();
        // console.log(product);
        console.log(ProductService);
       ProductService.saveProduct(product).then((res)=>{
            console.log("Product Added Successfully!!!");
            SetMsg("Product Added Successfully!!!")
            setProduct({
                productName:"",
                description:"",
                price:"",
                quantity:""
            });
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <>
    <Navbar/>
    {/* <h1>Add Product</h1> */}
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-6 offset-md-3"></div>
            <div className="card">
            <div className="card-header fs-3 text-align: center">Add Product
            {
                msg &&
                <p className="fs-4 text center text-success">{msg}</p>
            }
            </div>
                <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                    <div className="mb-3">
                        <label>Enter Product Name</label>
                        <input type="text" 
                         name="productName"
                         className="form-control" 
                         onChange={(e)=> handleChange(e)} 
                         value={product.productName}
                         required
                         />
                    </div>

                    <div className="mb-3">
                        <label>Enter Product Description</label>
                        <input type="text"
                         name="description"
                         className="form-control" 
                         onChange={(e)=> handleChange(e)}
                         value={product.description}
                         required
                         />
                    </div>

                    <div className="mb-3">
                        <label>Enter Product Price</label>
                        <input type="text" 
                         name="price" 
                         className="form-control" 
                         onChange={(e)=> handleChange(e)}
                         value={product.price}
                         required
                         />
                    </div>

                    <div className="mb-3">
                        <label>Enter Product Quantity</label>
                        <input type="text"
                         name="quantity"
                         className="form-control"
                         onChange={(e)=> handleChange(e)}
                         value={product.quantity}
                         required
                         />
                    </div>

                    <button className="btn btn-primary col-md-12">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProduct