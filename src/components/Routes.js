import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import Results from './Results'

const Routes = () => {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search"></Redirect>
                </Route>
                <Route path={['/search', '/images', '/news']}>
                    <Results/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
