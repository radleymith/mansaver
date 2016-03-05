// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import TitleBar from './components/titleBar/titleBar.jsx';
import Explanation from './components/explanation/explanation.jsx';
import SubscribeButton from './components/subscribeButton/subscribeButton.jsx';



ReactDOM.render(
    <TitleBar />,
    document.getElementById('header')
);

ReactDOM.render(
    <div>
        <Explanation />
        <SubscribeButton />
    </div>,
    document.getElementById('content')
);