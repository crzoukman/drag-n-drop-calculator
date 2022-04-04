import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
