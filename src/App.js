import React from 'react'
import './App.css';
import Header from './components/Header';
import Body from './components/Body'

class App extends React.Component{
  render(){
    return <div className="header">
      <Header></Header>
      <Body></Body>
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Mi primera aplicacion</h1>
//     </div>
//   );
// }

export default App;
