import './App.css';
import Home from "./components/Home";
import { ScreenClassProvider } from 'react-grid-system';

function App() {
  return (
    <ScreenClassProvider>
      <Home />
    </ScreenClassProvider>
  );
}

export default App;
