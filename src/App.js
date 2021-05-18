import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Shop from './pages/shop';

function App() {
  return (
  <Router>  
    <div className="">
      <Switch>
        <Route path="/" exact component={Shop}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
