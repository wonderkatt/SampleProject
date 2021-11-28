
import './App.css';
import RecordList from './components/RecordList';
import ApiService from './services/ApiService';

function App() {
  return (
    <div className="App">
      <ApiService/>
      <div className="container">
        <RecordList/>
      </div>
    </div>
  );
}

export default App;
