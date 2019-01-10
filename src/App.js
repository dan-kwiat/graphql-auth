import React, { Component } from 'react'
import { parse, print } from 'graphql';
import GraphiQL from 'graphiql'
import './App.css'
import 'graphiql/graphiql.css'
import { getAccessToken, defaultQuery } from './lib'

const getGraphQLFetcher = (authorId, scope) => graphQLParams => {
  return fetch('/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken(authorId, scope)}`,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
}

class App extends Component {
  state = {
    scope: 'read:review',
    authors: [
      { id: '123' },
      { id: '234' },
      { id: '345' },
      { id: '456' },
    ],
    authorId: '123',
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
      <div id='graphiql-container'>
        <GraphiQL
          ref={c => { this.graphiqlComp = c }}
          fetcher={getGraphQLFetcher(this.state.authorId, this.state.scope)}
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
              title='AuthorId'
            >
              {this.state.authors.map(({ id }) => (
                <GraphiQL.SelectOption
                  key={id}
                  label={`Author: ${id}`}
                  selected={id === this.state.authorId}
                  onSelect={() => this.setState({ authorId: id })}
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
