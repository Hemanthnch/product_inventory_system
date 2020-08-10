import React from 'react';
import axios from 'axios';

class EditProduct extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
        console.log(this.props.location.state);
        this.state={
            productName:'',
            productPrice:'',
            productStock: 0,
            productDescription:'',
            productCategory:'',
            productImage:'',

            productnameerror:'',
            productpriceerror:'',
            productstockerror:'',
            productdescriptionerror:'',
            productcategoryerror:'',
        }
    }
    checkValidation=(event)=>{
        let productNameError=''
        let productPriceError=''
        let productStockError=''
        let productDescriptionError=''
        let productCategoryError=''

        if(event==='productName' && this.state.productName===''){
            productNameError=<p style={{color:'red'}}>Product Name is Required</p>
        }

        if(event==='productPrice' && this.state.productPrice===''){
            productPriceError=<p style={{color:'red'}}>Product Price is Required</p>
        }

        if(event==='productStock' && this.state.productStock===''){
            productStockError=<p style={{color:'red'}}>Product Stock is Required</p>
        }

        if(event==='productDescription' && this.state.productDescription===''){
            productDescriptionError=<p style={{color:'red'}}>Product Description is Required</p>
        }

        if(event==='productCategory' && this.state.productCategory===''){
            productCategoryError=<p style={{color:'red'}}>Product Category is Required</p>
        }
        if(productNameError||productPriceError||productStockError||productDescriptionError||productCategoryError){
            this.setState({
                productnameerror:productNameError,
                productpriceerror:productPriceError,
                productstockerror:productStockError,
                productdescriptionerror:productDescriptionError,
                productcategoryerror:productCategoryError
            })
            return false
        }
        this.setState({
            productnameerror:'',
            productpriceerror:'',
            productstockerror:'',
            productdescriptionerror:'',
            productcategoryerror:''
        })
        return true

    }
    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/allProducts/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        productName: response.data.productName,
                        productPrice:response.data.productPrice,
                        productStock:response.data.productStock,
                        productDescription:response.data.productDescription,
                        productCategory:response.data.productCategory,
                        productImage:response.data.productImage,
                        id: response.data.id
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }
    getProductName=(event)=>{
        this.setState({productName:event.target.value})
    }
    getProductPrice=(event)=>{
        this.setState({productPrice:event.target.value})
    }
    getProductStock=(event)=>{
        this.setState({productStock:event.target.value})
    }
    getProductDescription=(event)=>{
        this.setState({productDescription:event.target.value})
    }
    getProductCategory=(event)=>{
        this.setState({productCategory:event.target.value})
    }
    getProductNameError=(event)=>{
        this.setState({productName:event.target.value})
        this.checkValidation('productName')
    }
    getProductPriceError=(event)=>{
        this.setState({productPrice:event.target.value})
        this.checkValidation('productPrice')
    }
    getProductStockError=(event)=>{
        this.setState({productStock:event.target.value})
        this.checkValidation('productStock')
    }
    getProductDescriptionError=(event)=>{
        this.setState({productDescription:event.target.value})
        this.checkValidation('productDescription')
    }
    getProductCategoryError=(event)=>{
        this.setState({productCategory:event.target.value})
        this.checkValidation('productCategory')
    }
    editProduct=()=>{
        console.log('Edit Product via axios and put')
        let productRequestBody = {
            "productName": this.state.productName,
            "productPrice": this.state.productPrice,
            "productStock": this.state.productStock,
            "productDescription": this.state.productDescription,
            "productCategory":this.state.productCategory,
            "productImage":this.state.productImage
        }
        axios.put('http://localhost:3000/allProducts/'+this.state.id, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/home')
                }, error=>{
                    console.error(error);
                })
    }
    render() { 
        const menuitem = {
            color:"black",
            backgroundColor:"cyan",
            display:'block-inline',
            padding: '10px',
            
            margin: '100px',
            
            
        }
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Please go to from home page!!!! </h1>
                </div>
            )
        }
        return ( 
            <div>
                <h1>Edit Product with id : {this.props.location.state.myid}  </h1>
                <div>
                <h3>Edit Product</h3>
                
                <form >
                
                    <h3>Id: 
                    <input type="text" value={this.state.id} readOnly></input></h3>
                    
                    
                    <h3>Product Name: 
                    <input type='text' id="productName" value={this.state.productName}  onChange={this.getProductName} onBlur={this.getProductNameError}></input></h3>
                    {this.state.productnameerror}
                    
                    <h3>Product Price :
                    <input type='text' id="productPrice" value={this.state.productPrice}  onChange={this.getProductPrice} onBlur={this.getProductPriceError}></input></h3>
                    {this.state.productpriceerror}

                    <h3>Product Stock : 
                    <input type='number' id="productStock" value={this.state.productStock}  onChange={this.getProductStock} onBlur={this.getProductStockError}></input></h3>
                    {this.state.productstockerror}

                    <h3>Product Description : 
                    <input type='text' id="productDescription" value={this.state.productDescription}  onChange={this.getProductDescription} onBlur={this.getProductDescriptionError}></input></h3>
                    {this.state.productdescriptionerror}

                    <h3 for="cat">Product Category : 
                    <select name="category" id="productCategory" onChange={this.getProductCategory} onBlur={this.getProductCategoryError}>
                        <option value={this.state.productCategory}></option>
                        
                        <option value="Electronics" onChange={this.getProductCategory}>Electronics</option>
                        <option value="stationary" onChange={this.getProductCategory}>Stationary</option>
                        <option value="Groceries" onChange={this.getProductCategory}>Groceries</option>
                        <option value="Plumbing" onChange={this.getProductCategory}>Plumbing</option>
                        
                    </select></h3>
                    <br></br>

                    <button type="button" onClick={this.editProduct} style={{backgroundColor:"orange"}}>Edit Product</button>
                    
                    
                </form>
                
            </div>
            </div>
         );
    }
}
 
export default EditProduct;