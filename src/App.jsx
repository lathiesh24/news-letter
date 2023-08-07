import React from 'react';
import Newsletter from './components/Newsletter';
import useAccountInfo from './hooks/account-info';

function App() {

  const handleSubscribe = async (email) => {
    console.log(email);
  }

  return (
    <div className="App">
      <Newsletter
        isSubmitting={false}
        isSubmitError={false}
        isSubmitSuccess={false}
        handleSubscribe={handleSubscribe}
        totalIssues={0}
        totalSubscribers={0} />
    </div>
  );
}

export default App;
