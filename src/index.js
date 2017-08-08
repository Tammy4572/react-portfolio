import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';

import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from './components/Layout';
import Contact from './components/Contact';
import About from './components/About';
import Shopping from './components/Shopping';
import Collars from './components/shopping/Collars';
import Harnesses from './components/shopping/Harnesses';
import Leashes from './components/shopping/Leashes';

//IMPORT COMPONENTS
ReactDOM.render(
     <BrowserRouter>
          <BaseLayout>
               <Switch>
                    <Route path="/contact" component={Contact} />
                    <Route path="/collars" component={Collars} />
                    <Route path="/about" component={About} />
                    <Route path="/shopping" component={Shopping} />
                    <Route path="/" component={App} />
               </Switch>
          </BaseLayout>
     </BrowserRouter>
     , document.getElementById('root'));
registerServiceWorker();
