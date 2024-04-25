import React from 'react'

class Counter extends React.Component {
  state={
    count:20
  };

  onInc=()=>{
    this.setState({
      count:this.state.count+1
    })
  };

  onDec=()=>{
    this.setState({
      count:this.state.count-1
    })
  };

  render (){
    return <div>
      <h1 className='font-semibold'>Counter:{this.state.count}</h1>
      <button className='bg-orange-500 px-2 py-1 rounded' onClick={this.onInc}>++</button>
      <button className='bg-orange-500 px-2 py-1 rounded' onClick={this.onDec}>--</button>
        </div>
    }
}

export default Counter
