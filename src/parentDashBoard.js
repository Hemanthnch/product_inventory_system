import React from 'react';
import DashBoard from './dashboard';
import { Pie } from 'react-chartjs-2';
// import './parentdahsboard.css';
import axios from 'axios';
import NavigationBar from './navbar';
class ParentDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCategory: '',
            selectedData: [],
            charData: {
            }
        }
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn') === null) {
            this.props.history.push('/login');
        }
    }
    getDashBoardForm = (productCategory) => {

        axios.get('http://localhost:3000/allProducts/?q=' + productCategory).then((res) => {
            let titles = []
            var stocks = []
            console.log(res.data)
            this.setState({ selectedData: res.data })
            this.state.selectedData.map((category) => {
                return (
                    titles.push(category.productName)
                )
            });
            this.state.selectedData.map((category) => {
                return (
                    stocks.push(parseInt(category.productStock))
                )
            });
            console.log(titles)
            this.setState({
                charData:
                {
                    labels: [...titles],
                    datasets: [{
                        label: 'Stock Availability',
                        data: [
                            ...stocks
                        ],
                        backgroundColor: [
                            'rgba(225,99,132,0.6)',
                            'rgba(225,206,86,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(225,159,64,0.6)',
                            'rgba(225,99,132,0.6)'
                        ]
                    }],
                }
            });
        })
        console.log(productCategory)
        console.log(this.state.charData)
    }
    render() {
        return (
            <div style={{ display: "inline" }}>
                {/* <NavigationBar></NavigationBar> */}
                <div>
                    <DashBoard parentcategory={this.getDashBoardForm}></DashBoard>
                </div>
                <div>
                    <h1>Chart</h1>
                    <Pie
                        data={this.state.charData}
                        height={80}
                        options={{
                            title: {
                                display: true,
                                text: 'Stock Availability of selected Category'
                            },
                            legend: {
                                display: true,
                                position: "top"
                            }
                        }}>

                    </Pie>
                </div>
            </div>
        );
    }
}

export default ParentDashBoard;