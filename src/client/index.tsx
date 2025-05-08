import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
    <Suspense fallback={<div>Chargement de l’application...</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);
