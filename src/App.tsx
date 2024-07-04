import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [x, setX] = useState([0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      performance.mark('app-end');
      const now = Date.now();
      const appLoadDurationPerformance = performance.measure('app-duration', 'app-start', 'app-end').duration;
      const appLoadDurationDate = now -(window.TEST_NAMESPACE || now)
      console.log('App load duration:', appLoadDurationPerformance, appLoadDurationDate);
      setX([appLoadDurationPerformance, appLoadDurationDate]);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        window.TEST_NAMESPACE: {window.TEST_NAMESPACE}
      </p>
      <ul>
        <li>
          Performance duration: {x[0]} ms
        </li>
        <li>
          Date duration: {x[1]} ms
        </li>
      </ul>
    </>
  )
}

export default App
