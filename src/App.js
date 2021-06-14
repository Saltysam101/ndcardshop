import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import account from './pages/account';
import Shop from './pages/shop';

function App() {
  return (
  <Router>  
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Shop}/>
        <Route path="/account" component={account}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
