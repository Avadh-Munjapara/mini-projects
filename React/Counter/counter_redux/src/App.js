import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1>Redux Counter</h1>
      <Counter/>
    </div>
  );
}

export default App;
