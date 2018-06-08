import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

//如果用href 那么会想server段发送请求 重新render页面
//用Link的话只会在client端 重新用componentrender 不要发送server request

const AppRouter = () => ( 
  //browserrouter里面只能有一个child 所以用div框起来
  //switch 选一个确定的 没有就会选最后一个
  <BrowserRouter> 
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage}  />

        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;