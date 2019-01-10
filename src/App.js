import React, { Component } from 'react'
import { parse, print } from 'graphql';
import GraphiQL from 'graphiql'
import './App.css'
import 'graphiql/graphiql.css'
import { getAccessToken, defaultQuery } from './lib'

const getGraphQLFetcher = (userId, scope) => graphQLParams => {
  return fetch('/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken(userId, scope)}`,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
}

class App extends Component {
  state = {
    scope: 'read:review',
    users: [
      { id: '123' },
      { id: '234' },
      { id: '345' },
      { id: '456' },
    ],
    userId: '123',
  }
  handlePrettifyQuery = event => {
    const editor = this.graphiqlComp.getQueryEditor()
    editor.setValue(print(parse(editor.getValue())))
  }
  handleToggleHistory = () => {
    this.graphiqlComp.setState(s => ({
      historyPaneOpen: !s.historyPaneOpen
    }))
  }
  render() {
    return (
      <div id='graphiql-auth-container'>
        <GraphiQL
          ref={c => { this.graphiqlComp = c }}
          fetcher={getGraphQLFetcher(this.state.userId, this.state.scope)}
          defaultQuery={defaultQuery}
          >
          <GraphiQL.Toolbar>
            <GraphiQL.Button
              onClick={this.handlePrettifyQuery}
              title='Prettify Query (Shift-Ctrl-P)'
              label='Prettify'
            />
            <GraphiQL.Button
              onClick={this.handleToggleHistory}
              title='Show History'
              label='History'
            />
            <GraphiQL.Select
              title='UserId'
            >
              {this.state.users.map(({ id }) => (
                <GraphiQL.SelectOption
                  key={id}
                  label={`User: ${id}`}
                  selected={id === this.state.userId}
                  onSelect={() => this.setState({ userId: id })}
                />
              ))}
            </GraphiQL.Select>
            <input
              placeholder='scope'
              value={this.state.scope}
              onChange={e => this.setState({ scope: e.target.value })}
            />
          </GraphiQL.Toolbar>
        </GraphiQL>
      </div>
    )
  }
}

export default App
