//import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import './index.scss';
import {Root} from './Root';
import ReactDOM from 'react-dom';

//const container = document.getElementById('root') as HTMLElement;

//createRoot(container).render(<Root />);

ReactDOM.hydrate(<Root />, document.getElementById('root'));
