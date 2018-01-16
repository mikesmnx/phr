import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import PhrasalVerbs from '../phrasal-verbs'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/phrasal-verbs">Phrasal Verbs</Link> &nbsp;
      <Link to="/phrasal-verbs/sentences">Sentences</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/phrasal-verbs" component={PhrasalVerbs} />
      <Route exact path="/phrasal-verbs/sentences" component={PhrasalVerbs} />
    </main>
  </div>
)

export default App