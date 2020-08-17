import React from 'react';
import './card.css'
class HomeDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    deleteCurrentProduct = () => {
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    editProductWithId = () => {
        console.log("Edit Product With Id : " + this.props.id)
        this.props.editId(this.props.id)
    }
    render() {
        let imageStyle = {
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            float: 'center'
        }
        let loggedIn = localStorage.getItem("loggedIn")
        return (

            <div class="column">
                <div class="card">

                    <img src={this.props.productImage} style={imageStyle}></img>
                    <h4>Id :  {this.props.id}</h4>
                    <h4 >Product Name :  {this.props.productName}</h4>
                    <h4>Product Price : {this.props.productPrice}</h4>
                    <h4>Product Stock : {this.props.productStock}</h4>
                    <h4>Product Description : {this.props.productDescription}</h4>
                    <h4>Product Category : {this.props.productCategory}</h4>
                    {loggedIn &&
                        <div>
                            <button onClick={this.editProductWithId} style={{ backgroundColor: "green" }}>Edit</button>
                            <button onClick={this.deleteCurrentProduct} style={{ float: "right", backgroundColor: "red" }}>Delete</button>
                        </div>}
                </div>
            </div>


        );
    }
}

export default HomeDetail;