import React from 'react'

import {

  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'

import DisplayAll from './contactmanager/DisplayAll/c'
import Display from './contactmanager/Display/c'
import Edit from './contactmanager/Edit/c'
import Create from './contactmanager/Create/c'
import Delete from './contactmanager/Delete/c'

function App() {

  return (

    <Router>

      <Switch>

        <Route exact path="/" component={DisplayAll} />

        <Route path="/Display/:id" component={Display} />

        <Route path="/Edit/:id" component={Edit} />

        <Route path="/Create" component={Create} />

        <Route path="/Delete/:id" component={Delete} />

      </Switch>

    </Router >

  )

}

export default App;
