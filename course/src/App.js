import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
 

  useEffect(() => {
    
      console.log("ui rendering");
     
  }, [text]); // Empty dependency array ensures this effect runs only once on initial mount

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;