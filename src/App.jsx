import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Curr from './pages/Curr';
import Temp from './pages/Temp';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curr" element={<Curr />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </HashRouter>
  );
};


export default App;
