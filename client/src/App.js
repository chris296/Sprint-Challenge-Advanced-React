import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import NavBar from './components/NavBar';

class App extends React.Component{

  state = {
    data:[]
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      this.setState({
        data: res.data
      })
    })
    .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.data.map(item =>(
          <Card key={item.id} data={item} />
        ))}
      </div>
    )
  }
}
export default App;
