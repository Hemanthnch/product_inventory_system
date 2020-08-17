import React from 'react';
import './dashboard.css'
import NavigationBar from './navbar';

class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: '',
            buttonclicked: true
        }
    }
    componentWillMount() {
        if (localStorage.getItem('loggedIn') === null) {
            this.props.history.push('/login');
        }
    }
    getCategory = (e) => {
        console.log(e.target.value)
        this.setState({ selectedCategory: e.target.value })
    }
    getDashboard = (e) => {
        e.preventDefault();

        this.setState({ buttonclicked: true })
        console.log(this.state.selectedCategory)
        console.log(this.state.buttonclicked)
        this.props.parentcategory(this.state.selectedCategory)
    }
    componentDidMount() {
        console.log(this.state.buttonclicked)
    }
    render() {
        return (
            <div><NavigationBar></NavigationBar>
                <div className="dashBoardCss">

                    <h1>Dashboard</h1>
                    <div className="dashboard-form">
                        <form >
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td><b>Select Category</b></td>
                                        <td>
                                            <select onChange={this.getCategory} required>
                                                <option value=''>Select One</option>
                                                <option value="Groceries">Groceries</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Vegitables">Vegitables</option>
                                                <option values="Stationary">Stationary</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td><button type="submit" onClick={this.getDashboard}>Submit</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;