import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import View from "../src";

const App = (props) => {
  return (
    <div>
      <View {...props} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
