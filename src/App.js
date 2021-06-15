import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import account from './pages/account';
import Shop from './pages/shop';
import cart from './pages/cart';

function App() {
  return (
  <Router>  
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Shop}/>
        <Route path="/account" component={account}/>
        <Route path="/cart" component={cart}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
