import React from 'react';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Samp from 'components/Samp/Samp';
import 'components/App/App.css';

function App() {
	return (
    <div className="App">
      <Header />
      <Main />
			<Samp />
    </div>
  );
}

export default App;
