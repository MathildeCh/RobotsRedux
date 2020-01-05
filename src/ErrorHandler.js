import React, { Component } from 'react';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hasError: false,
      errorInfo: ""
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError:true, errorInfo:info})
  }

  render(){
    const {hasError, errorInfo} = this.state;
    if(hasError){
      return(
        <div>
          <h1>Something went wrong, please try again</h1>
          <p>{errorInfo}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler
