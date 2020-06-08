import React from 'react';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import '../assets/styles/app.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
