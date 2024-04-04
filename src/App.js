import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import config from './aws-exports';
import { getBlog } from './graphql/queries';
import { createBlog as createBlogMutation } from './graphql/mutations';
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

  const createBlog = async () => {
    const name = prompt('Blog name?');
    const data = client.graphql({
      query: createBlogMutation,
      variables: {
        input: {
          name,
        },
      },
    });

    console.log('created blog', data);
  };
  return (
    <div className="App">
      <button onClick={createBlog}>add blog</button>
    </div>
  );
}

export default App;
