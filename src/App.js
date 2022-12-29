import './App.css';
import Home from './Home';
import Main from './Main';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Detail from './Detail';

function App() {


 

//

  return (

    <>
     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/detail/:id' element={<Detail/>} />

    </Routes>
    </>
  );
}

export default App;
