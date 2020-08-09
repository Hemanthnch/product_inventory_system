import React from 'react';
import Content from './content'
import './App.css';

// import Header from './navbar';

import NavigationBar from './navbar';
// import Content from './components/content';

function App() {
  return (
    <div className="App">
          <NavigationBar></NavigationBar>
     <Content></Content>
    </div>
  );
}

export default App;
