import React from 'react';
import './App.css';
import CatFact from './components/CatFact';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> Fetch demo with Redux </h1>
            </header>
            <main>
                <h2> Cat facts! </h2>
                <CatFact />
            </main>
        </div>
    );
}

export default App;
