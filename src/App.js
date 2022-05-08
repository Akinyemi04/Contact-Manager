import './App.css';
import { Contacts } from './Components/Contacts';
const contacts= ['Made Jojo','David Adeleke','Mike tyson']
function App() {
  return (
    <div className="App">
      <Contacts data={contacts}/>
    </div>
  );
}

export default App;
