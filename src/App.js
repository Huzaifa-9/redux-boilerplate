import React, { Component } from 'react';
import DerivedSate from './components/child';
import { connect } from 'react-redux';
import { setData } from './store/action';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      data: [],
    };
  }

  componentDidMount() {
    // console.log('componentDidMount');

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log('data==>', data);
      })
      .catch((err) => console.log(err));
  }


  render() {
    // console.log('render');
    console.log(this.props)
    return (
      
      <div style={{ textAlign: 'center' }}>
        <h1 style={h1Style}>Redux Store</h1>
        
        {this.state.count < 5 && <DerivedSate count={this.state.count} />}

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increament
        </button>
        <button
          style={{ textAlign: 'center' }}
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          Decreament
        </button>
        <br />
        <button onClick={()=>this.props.set_data("data can go from their")}>
          set-Data
        </button>
        
        {this.state.data.map((v, i) => {
          return (
            <h4 key={i} style={pStyle}>
              {v.title}
            </h4>
          );
        })}
      </div>
    );
  }
}

const h1Style = {
  textAlign: "center",
  margin: "5px",
  padding: "5px",
  fontFamily: "consolas",
  fontSize:"50px"  
}
const pStyle = {
  fontSize: '20px',
  textAlign: 'center',
};

const mapStoreToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  app_name: state.app.app_name,
});

const mapDispatchToProps = (dispatch) => ({
  set_data: (data)=>dispatch(setData(data))
});

export default connect(mapStoreToProps,mapDispatchToProps)(App);