import React from 'react';
import HeaderBar from './components/header/HeaderBar';
import './App.scss';

export default function App(): React.JSX.Element {
    return (
        <div className="App">
            <HeaderBar />
            <div id="body">
                
            </div>
        </div>
    );
}