import axios from "axios";

const API_URL="http://localhost:8089"
// const product= product;

class ProductService{

  static  saveProduct(product) {
        return axios.post(API_URL+"/saveproduct",product);
    }

   static getAllProduct() {
        return axios.get(API_URL+"/");
    }

   static getproductById(id) {
        return axios.get(API_URL+"/"+id);
    }

     deleteproduct(id) {
        return axios.get(API_URL+"/deleteproduct/"+id);
    }

    editproduct(product) {
        return axios.get(API_URL+"/editproduct", product);
    }

}

export default ProductService;