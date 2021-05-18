import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Shop from './pages/shop';

function App() {
  return (
  <Router>  
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Shop}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
