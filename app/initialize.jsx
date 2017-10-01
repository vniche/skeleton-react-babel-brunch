import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const load = () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

registerServiceWorker();