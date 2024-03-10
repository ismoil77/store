import { createSlice } from "@reduxjs/toolkit"
import { addTovarCart, getCategory, getFromCart, getTovar, getTovarById, minuss, pluss } from "../../api/home/home"



export const HomeJs = createSlice({
    name: 'homeJs',
    initialState:{
        value: 0,
        data:[],
        dataTovar:[],
        dataCategory:[],
        dataCart:[],
       
    },
    reducers: {
 
    },
    extraReducers:(builder)=>{
     
      builder.addCase(getTovar.fulfilled, (state,action)=>{
        state.data=action.payload
        console.log(action.payload);
     
        })
        builder.addCase(getTovarById.fulfilled, (state,action)=>{
         state.dataTovar=action.payload
          // console.log(action.payload);
       
          })
          builder.addCase(getCategory.fulfilled, (state,action)=>{
            state.dataCategory=action.payload
             // console.log(action.payload);
          
             })
             builder.addCase(addTovarCart.fulfilled, (state,action)=>{
              // state.dataCategory=action.payload
               // console.log(action.payload);
            
               })
               builder.addCase(pluss.fulfilled, (state,action)=>{
                // state.dataCategory=action.payload
                 // console.log(action.payload);
              
                 })
                 builder.addCase(minuss.fulfilled, (state,action)=>{
                  // state.dataCategory=action.payload
                   // console.log(action.payload);
                
                   })
                   builder.addCase(getFromCart.fulfilled, (state,action)=>{
                    state.dataCart=action.payload
                     // console.log(action.payload);
                  
                     })
                   
    }
    
    

  })
  
  // export const {} = HomeJs.actions
  
  export default HomeJs.reducer
