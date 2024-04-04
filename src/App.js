import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import config from './aws-exports';
import { getBlog } from './graphql/queries';

function App() {
  useEffect(() => {
    const pullData = async (id) => {
      console.log('in pullData', id);
      let data = await fetch(config.aws_appsync_graphqlEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
          'X-Api-key': config.aws_appsync_apiKey,
        },
        body: JSON.stringify({
          query: getBlog,
          variables: {
            id,
          },
        }),
      });
      console.log(await data.json());
    };

    pullData('12');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
