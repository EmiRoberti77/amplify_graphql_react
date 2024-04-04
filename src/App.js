import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import config from './aws-exports';
import { getBlog } from './graphql/queries';
import { generateClient } from 'aws-amplify/api';
const client = new generateClient();
function App() {
  useEffect(() => {
    const pullData = async (id) => {
      const data = await client.graphql({
        query: getBlog,
        variables: {
          id: '12',
        },
      });

      console.log(data);
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
