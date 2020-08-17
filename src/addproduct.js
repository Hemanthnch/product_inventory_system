import React from 'react';
import axios from 'axios';
import NavigationBar from './navbar';
class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            productName: '',
            productImage: '',
            productPrice: '',
            productStock: '',
            productDescription: '',
            productCategory: '',
            buttonstatus: true,
            productnameerror: '',
            productpriceerror: '',
            productstockerror: '',
            productdescriptionerror: '',
            productcategoryerror: '',
        }
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn') === null) {
            this.props.history.push('/login');
        }
    }
    checkValidation = (event) => {
        let productNameError = ''
        let productPriceError = ''
        let productStockError = ''
        let productDescriptionError = ''
        let productCategoryError = ''

        if (event === 'productName' && this.state.productName === '') {
            productNameError = <p style={{ color: 'red' }}>Product Name is Required</p>
        }

        else if (event === 'productPrice' && this.state.productPrice === '') {
            productPriceError = <p style={{ color: 'red' }}>Product Price is Required</p>
        }

        else if (event === 'productStock' && this.state.productStock === '') {
            productStockError = <p style={{ color: 'red' }}>Product Stock is Required</p>
        }

        else if (event === 'productDescription' && this.state.productDescription === '') {
            productDescriptionError = <p style={{ color: 'red' }}>Product Description is Required</p>
        }

        else if (event === 'productCategory' && this.state.productCategory === '') {
            productCategoryError = <p style={{ color: 'red' }}>Product Category is Required</p>
        }
        if (productNameError || productPriceError || productStockError || productDescriptionError || productCategoryError) {
            this.setState({
                productnameerror: productNameError,
                productpriceerror: productPriceError,
                productstockerror: productStockError,
                productdescriptionerror: productDescriptionError,
                productcategoryerror: productCategoryError,
                buttonstatus: true
            })
            return false
        }
        this.setState({
            productnameerror: '',
            productpriceerror: '',
            productstockerror: '',
            productdescriptionerror: '',
            productcategoryerror: '',
            buttonstatus: false
        })
        return true

    }
    getProductName = (e) => {
        this.setState({ productName: e.target.value })
        this.checkValidation('productName')

    }
    getProductPrice = (e) => {
        this.setState({ productPrice: e.target.value })
    }
    getProductStock = (e) => {
        this.setState({ productStock: e.target.value })
    }
    getProductDescription = (e) => {
        this.setState({ productDescription: e.target.value })
    }
    getProductCategory = (e) => {
        console.log(e.target.value)
        this.setState({ productCategory: e.target.value })
    }
    getImage = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({ productImage: event.target.value.substr(12) })
    }
    getProductNameError = (event) => {
        this.setState({ productName: event.target.value })
        this.checkValidation('productName')
    }
    getProductPriceError = (event) => {
        this.setState({ productPrice: event.target.value })
        this.checkValidation('productPrice')
    }
    getProductStockError = (event) => {
        this.setState({ productStock: event.target.value })
        this.checkValidation('productStock')
    }
    getProductDescriptionError = (event) => {
        this.setState({ productDescription: event.target.value })
        this.checkValidation('productDescription')
    }
    getProductCategoryError = (event) => {
        this.setState({ productCategory: event.target.value })
        this.checkValidation('productCategory')
    }
    addProduct = () => {
        if (this.state.productName === '' || this.state.productPrice === '' || this.state.productDescription === '' || this.state.productStock === '' || this.state.productCategory === '' || this.state.productimage === '') {
            this.setState({ buttonstatus: false })
        }
        else {
            let productRequestBody = {

                "productName": this.state.productName,
                "productImage": this.state.productImage,
                "productPrice": this.state.productPrice,
                "productStock": this.state.productStock,
                "productDescription": this.state.productDescription,
                "productCategory": this.state.productCategory

            }

            axios.post('http://localhost:3000/allProducts', productRequestBody)
                .then(response => {
                    console.log(response)

                    this.props.history.push('/')
                }, error => {
                    console.error(error);

                }

                )
        }
    }
    render() {
        const mystyle = {
            color: "Black",
            backgroundColor: "white",
            padding: "10px",
            width: "400px",
            display: "inline-block",
            margin: "20px",
            border: "15px solid blueviolet"
        };
        return (
            <div><NavigationBar></NavigationBar>
                <div style={mystyle}>

                    <h3>Add Product Here</h3>
                    <form >

                        <h4>Product Name : </h4>
                        <input type="text" id="productName" placeholder="Enter Product Name" onChange={this.getProductName} onBlur={this.getProductNameError}></input>
                        {this.state.productnameerror}
                        <br></br>

                        <h4>Product Image: </h4>
                        <input type="file" onChange={this.getImage} multiple accept='image/*' />

                        <br></br>

                        <h4>Product Price : </h4>
                        <input type="text" id="productPrice" placeholder="Enter Product Price" onChange={this.getProductPrice} onBlur={this.getProductPriceError}></input>
                        {this.state.productpriceerror}
                        <br></br>

                        <h4>Product Stock : </h4>
                        <input type="number" id="productStock" placeholder="Enter Product Stock" onChange={this.getProductStock} onBlur={this.getProductStockError}></input>
                        {this.state.productstockerror}
                        <br></br>

                        <h4>Product Description :</h4>
                        <input type="text" id="productDescription" placeholder="Enter Product Description" onChange={this.getProductDescription} onBlur={this.getProductDescriptionError}></input>
                        {this.state.productdescriptionerror}
                        <br></br>

                        <h4 >Product Category : </h4>
                        <select name="category" id="productCategory" onChange={this.getProductCategory} onBlur={this.getProductCategoryError}>
                            <option value=''>Select One</option>
                            <option value="Electronics" onChange={this.getProductCategory}>Electronics</option>
                            <option value="Stationary" onChange={this.getProductCategory}>Stationary</option>
                            <option value="Groceries" onChange={this.getProductCategory}>Groceries</option>
                            <option value="Plumbing" onChange={this.getProductCategory}>Plumbing</option>

                        </select>
                        {this.state.productcategoryerror}
                        <br></br>
                        <br></br>
                        <button type="button" onClick={this.addProduct} disabled={this.state.buttonstatus} style={{ backgroundColor: 'green' }}><b>Add Product</b></button>

                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct;