import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import axios from "axios";
import toast from "react-hot-toast";





  export const getTovar = createAsyncThunk("todo/getTodo", async () => {
    try {
        let { data } = await axios.get(`http://65.108.148.136:8072/Product/get-products`);
// console.log(data);
      return data.data.products
    } catch (error) {
      console.error(error);
    }
  });




  export const getTovarById = createAsyncThunk("todo/getTodosById", async (id) => {
    try {
        let { data } = await axios.get(`http://65.108.148.136:8072/Product/get-product-by-id?id=${id}`);
// console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }
  });

/////////////////////http://65.108.148.136:8072/Category/get-categories
export const getCategory = createAsyncThunk("todo/getCategories", async () => {
  try {
      let { data } = await axios.get(`http://65.108.148.136:8072/Category/get-categories`);
// console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
});

////////////////////http://65.108.148.136:8072/Cart/add-product-to-cart?id=116






export const addTovarCart = createAsyncThunk("todo/addTovarCart", async (id) => {
  try {
      let { data } = await axiosRequest.post(`Cart/add-product-to-cart?id=${id}`);
       if (data.statusCode === 200) {
        toast.success("ADDED TO CART");
        // getTodos();
      }
      if (data.statusCode !== 200) {
        toast.error(data.statusCode);
      }
console.log(data);
    // return data
  } catch (error) {
    console.error(error);
  }
});



//////////////////////http://65.108.148.136:8072/Cart/increase-product-in-cart?id=474


export const minuss = createAsyncThunk("todo/minuss", async (id) => {
  try {
      let { data } = await axiosRequest.put(`Cart/increase-product-in-cart?id=${id}
      `);
// console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }

});




export const pluss = createAsyncThunk("todo/pluss", async (id) => {
  try {
      let { data } = await axiosRequest.put(`Cart/reduce-product-in-cart?id=${id}
      `);
// console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
});



export const getFromCart = createAsyncThunk("todo/getFromCart", async () => {
  try {
      let { data } = await axiosRequest.get(`Cart/get-products-from-cart`);
console.log(data.data[0].totalPrice);
    return data
  } catch (error) {
    console.error(error);
  }
});