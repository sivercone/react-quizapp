import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Create } from './pages/Create';
import { Learn } from './pages/Learn';
import { Header } from './components/Header';

/*
   TODO:
   1. Сделать удаление карточек
*/

function App() {
   return (
      <>
         <Header />
         <Switch>
            <Route path="/" component={Learn} exact />
            <Route path="/create" component={Create} exact />
         </Switch>
      </>
   );
}

export default App;
