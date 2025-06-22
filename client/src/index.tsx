import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello from React!</h1>;
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
