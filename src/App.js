import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Test1 from './components/test-1/test-1'
import Test2 from './components/test-2/test-2'
import Resultspage from './components/Resultspage/Resultspage'

const App = () => (
  <>
    <Router>
      <Route
        path="/"
        exact
        component={Homepage}
      />
      <Route
        path="/test-1"
        component={Test1}
      />
      <Route
        path="/test-2"
        component={Test2}
      />
      <Route
        path="/results"
        component={Resultspage}
      />
    </Router>
  </>
)

export default App
