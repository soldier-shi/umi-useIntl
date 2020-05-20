import React, { Component } from 'react'
import { Button } from 'antd'

class Counter extends Component {
  state = {
    count: 0
  }

  log =  () => {
    this.setState({
      count: this.state.count + 1
    })
    setTimeout(() => {
      console.log(this.state.count)
    }, 3000)
  }

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div>
        <h3>class component</h3>
        <p>点击了 {this.state.count} 次</p>
        <Button onClick={this.log}>点击</Button>
      </div>
    )
  }
}

export default Counter
