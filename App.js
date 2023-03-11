import React from 'react';
//  import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
// import { render } from '@testing-library/react';

class App extends React.Component
{
 render()
 {
  return(
    <div className="App">
     <Header/>
     </div>
  );
 }
}


export default App;
