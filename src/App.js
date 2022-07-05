import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './app/appRouter/App-router';
import './assets/styles/App.css';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-container">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
