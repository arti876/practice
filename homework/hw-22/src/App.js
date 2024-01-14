import React from 'react';

// const App = () => {
//   return(
//     <h1>Hello</h1>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <h1 className='test-class'>{this.props.title}</h1>
    )
  }
}

export default App