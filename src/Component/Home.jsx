import React, { useEffect } from 'react'
import ProductService from '../Service/ProductService';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {

    const [productlist, SetProductList] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        init();
    }, []);

    const init=()=>{
        ProductService.getAllProduct().then((res) => {
            console.log(res.data);
            SetProductList(res.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteproduct = (id) => {
        alert("delete" +id);
       new ProductService().deleteproduct(id).then((res) => {
            setMsg("Delete Successfully!");
            init();
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>
         <Navbar/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="car-header fs-3 text-align: center;">
                                Inventory
                                {
                                    msg &&
                                    <p className="fs-4 text center text-success">{msg}</p>
                                }
                            </div>
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO</th>
                                            <th scope="col">ProductName</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            productlist.map((p, num) => (
                                                <tr>
                                                    <td>{num + 1}</td>
                                                    <td>{p.productName}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.quantity}</td>
                                                    <td>
                                                        <Link to={"editproduct/"+p.id} className="btn btn-sm btn-primary">Edit</Link>
                                                        <button onClick={() => deleteproduct(p.id)} to="" className="btn btn-sm btn-danger ms-3">Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home