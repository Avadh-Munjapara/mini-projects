import './App.css';
import Tag from './components/Tag';
import Random from './components/Random';

function App() {
  return (
    <div className='bg-backimage bg-100% pt-5 bg-fixed flex flex-col gap-5 justify-center items-center min-h-screen w-screen'> 
      <h1 className='bg-white w-[80vw] text-center text-4xl font-bold rounded-md py-2'>Random GIFS</h1>
      <Random></Random>
      <Tag></Tag>
    </div>
  );
}

export default App;
