import React from 'react';
import axios from 'axios';
import HomeDetail from './homedetail'
import './card.css'
import NavigationBar from './navbar';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            searchProducts: [],
            searchValue: '',
            persons: [],
            myid: 0,
            deletesuccess: false,
            originalProduct: []
        }

    }
    intializeState = () => {
        setTimeout(() => {
            this.setState({ deleteSuccess: false })
        }, 2000)
    }
    componentWillMount() {

        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get('http://localhost:3000/allProducts')
            .then(response => {
                console.log(response);
                console.log(response.data)
                this.setState({ products: response.data, originalProduct: response.data })
                console.log(this.state.products);
            }, error => {
                console.error(error);
            })
    }
    deleteProductWithId = (id) => {
        console.log('delete Product for received id: ' + id);
        axios.delete('http://localhost:3000/allProducts' + '/' + id)
            .then(response => {
                console.log(response)
                //show deleteSuccess message
                this.setState({ deleteSuccess: true })
                this.getAllProducts()
                //remove deleteSuccess message after 2000 millisecond
                this.intializeState()
            }, error => {
                console.error(error)
            })
    }
    renderAllProducts = () => {
        return this.state.products.map(product => {
            return (
                <HomeDetail
                    key={product.id}
                    id={product.id}
                    productName={product.productName}
                    productImage={product.productImage}
                    productPrice={product.productPrice}
                    productStock={product.productStock}
                    productDescription={product.productDescription}
                    productCategory={product.productCategory}
                    deleteId={this.deleteProductWithId}
                    editId={this.editProductWithId}
                >

                </HomeDetail>

            );
        })

    }

    openAddProduct = () => {
        this.props.history.push('/addproduct')
    }
    editProductWithId = (id) => {
        this.setState({ myid: id })
        console.log('Edit Product with id: ' + id);
        this.props.history.push({
            pathname: '/editproduct',
            state: { myid: id }
        })
    }
    getSearch = (e) => {
        let searchV = e.target.value
        if (searchV === '') {
            this.getAllProducts()
        }
        this.setState({ searchValue: searchV })
        console.log(searchV);
        let searchF = this.state.originalProduct.filter(f => {
            return f.productName.toLowerCase().match(searchV.toLowerCase())
        })
        console.log(searchF);
        this.setState({ products: searchF })

    }
    render() {
        const topnav = {
            backgroundColor: "#333",
            overflow: "hidden",
            color: "#f2f2f2",
            padding: "14px 16px",
            font: "17px",
            float: "center"
        }
        let loggedIn = localStorage.getItem("loggedIn")
        return (

            <div>
                <NavigationBar></NavigationBar>
                <div>
                    <label>Search : </label>
                    <input type="text" onChange={this.getSearch}></input>
                </div>
                <br></br>
                {loggedIn &&
                    <button onClick={this.openAddProduct} style={topnav}>Add Product</button>}
                <br></br>
                <br></br>

                <div class="row">

                    {this.renderAllProducts()}

                    <br></br>
                </div>


                {this.state.deleteSuccess &&
                    <div>
                        <h3>Product deleted success!!!!</h3>
                    </div>
                }
            </div>
        )
    }
}

export default Home;