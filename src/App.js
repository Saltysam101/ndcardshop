import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import account from './pages/account';
import Shop from './pages/shop';
import cart from './pages/cart';
import checkout from './pages/checkout';

function App() {
  return (
  <Router>  
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Shop}/>
        <Route path="/account" component={account}/>
        <Route path="/cart" component={cart}/>
        <Route path="/checkout" component={checkout}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
