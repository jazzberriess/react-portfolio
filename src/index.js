import React from 'react';
//https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';
import App from './App';

const rootContainer = document.getElementById('root');

createRoot(rootContainer).render(<App />);
