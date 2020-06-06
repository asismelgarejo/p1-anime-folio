import React from 'react';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import '../assets/styles/app.scss';

const App = () => {
  return (
    <div className='container'>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
