import './App.css';
import Bob from './canary/canary1.jpg';
import Joe from './canary/canary2.jpg';
import Mike from './canary/canary3.jpg';
import Kevin from './canary/canary4.jpg';
import Will from './canary/canary5.jpg';

function App() {
  return (
    <div>
      <header className='header-component'>
        <h1>Canarygram</h1>
        <h2>Instagram for Canaries I Guess</h2>
      </header>
      <ul className='post-list'>
        <li className='post-component'>
          <button>
            <img src={Bob} alt='Bob'/>
            <p>Bob</p>
          </button>
        </li>
        
        <li className='post-component'>
          <button>
            <img src={Joe} alt='Joe'/>
            <p>Joe</p>
          </button>
        </li>

        <li className='post-component'>
          <button>
            <img src={Mike} alt='Mike'/>
            <p>Mike</p>
          </button>
        </li>

        <li className='post-component'>
          <button>
            <img src={Kevin} alt='Kevin'/>
            <p>Kevin</p>
          </button>
        </li>

        <li className='post-component'>
          <button>
            <img src={Will} alt='Will'/>
            <p>Will</p>
          </button>
        </li>

      </ul>
    </div>
  );
}

export default App;
