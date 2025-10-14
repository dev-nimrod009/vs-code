import React from 'react'; // MUST be imported if using React.StrictMode or similar explicit calls
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// These imports assume the files are in the same directory (src/)
// Double-check the path if App.jsx and index.css are elsewhere.
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error("Root element with ID 'root' not found in the HTML.");
}
