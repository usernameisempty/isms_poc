import Popup from './components/popup';
import {useState} from 'react';
function App() {
  const [buttonPopup,setButtonPopup]=useState(true);
    return (
    <div className="App">
      <main>
        <h1>React Popup</h1>
        <br />
        <br />
        <button onClick={()=> setButtonPopup(true)}> Open Popup</button>
        </main>
        <popup trigger={buttonPopup}>
          <h3>My Popup</h3>
          <p> This is my button triggerd popup</p>
        </popup>
      
    </div>
  );
}
export default App;
