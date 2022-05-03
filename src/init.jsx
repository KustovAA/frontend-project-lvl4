// @ts-check

import ReactDOM from 'react-dom';
import App from './App.jsx';

const init = () => {
  const root = document.getElementById('chat');

  ReactDOM.render(<App />, root);
};

export default init;
