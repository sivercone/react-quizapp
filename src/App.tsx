import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Learn } from './pages/Learn';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Create } from './components/Create';

/*
   TODO:
   1. Сделать удаление карточек
   2. Убрать Header и сделать бургер (плюс добавить эффект наводки для курсора, есть в ютубе туториал
*/

function App() {
   return (
      <>
         <Header />
         <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/learn/:id" component={Learn} exact />
            <Route path="/create" component={Create} exact />
         </Switch>
      </>
   );
}

export default App;
