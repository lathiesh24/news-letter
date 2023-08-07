import React from 'react';
import Newsletter from './components/Newsletter';
import useAccountInfo from './hooks/account-info';

function App() {

  const handleSubscribe = async (email) => {
    console.log(email);
  }

  return (
    <div className="App">
      <Newsletter />
    </div>
  );
}

export default App;
