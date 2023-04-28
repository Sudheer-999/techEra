import {Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
