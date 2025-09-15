import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className='subHeading'>
          Hey, this is Git Session & today is Tuesday 26th August. <br />
          And it's a beautiful sunny Day.
        </p>

        <button>Click Here!</button>
        <Text>Hello, Test1 file changes</Text>
        <Text>Hello, Test1 file commit 1</Text>
        <Text>Hello, Test1 file commit 2</Text>
        <Text>Hello, Test1 file commit 3</Text>

        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
