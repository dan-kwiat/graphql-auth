import React from 'react';
import GraphiQL from 'graphiql';
// import fetch from 'fetch';
// import logo from './logo.svg';
import './App.css';
import 'graphiql/graphiql.css'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// without scopes
// const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjI1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMifQ.MoFMdDGC9KEUKSTa7FLthshgnhxWlLqigGrWPx1Kt5k'

// with read:author
// const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjI1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6InJlYWQ6YXV0aG9yIn0.5lqn5-0yfyFxeYQC_1okF6Qk8M1ghYkW73hgMbnFT6g'

// with read:authorz
const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjI1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6InJlYWQ6YXV0aG9yeiJ9.pnsky7nI_Na3aUpaV4P_GrhnI7vjhDelWIrGYU27fAc'

// with write:articles
// const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjI1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6IndyaXRlOmFydGljbGVzIn0.FWk4Ht6HFl4nhPSlHFUebC7Nh0JCSV12aeZjFjGcAsI'

// with read:author write:articles
// const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJncmFwaHFsLXRlc3Qtc2VydmVyIiwiaWF0IjoxNTA5MDQxMTE3LCJleHAiOjI1NDA1NzcxMTcsImF1ZCI6ImdyYXBocWwtdGVzdC1hcGkiLCJzdWIiOiIxMjMiLCJzY29wZSI6InJlYWQ6YXV0aG9yIHdyaXRlOmFydGljbGVzIn0.V8ogQuj5_FBBdJByl1DBAFXAU4-Noa81gwZCltU1yBE'

function graphQLFetcher(graphQLParams) {
  return fetch('/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

const App = () => <div id="graphiql">
  <GraphiQL fetcher={graphQLFetcher} />
</div>

export default App;
