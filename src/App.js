import './App.css';
import Maps from './components/Maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Collection } from './components/Collection';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Maps} />
        <Route path="/saved" component={Collection} />
      </Router>

    </div>
  );
}

export default App;
