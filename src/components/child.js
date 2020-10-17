import React,{Component} from 'react'

  
  
class DerivedSate extends Component{
    render() {
        return <h1 style={{ textAlign: 'center' }}>{this.props.count}</h1>;
    }
}
export default DerivedSate