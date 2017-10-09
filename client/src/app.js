import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import MainSidebar from './components/mainSidebar';
import Home from './views/home';

const App = () => (
    <div>
        <Header />
        <MainSidebar />
        <Route exact path="/" component={Home} />
    </div>
);

export default App;
