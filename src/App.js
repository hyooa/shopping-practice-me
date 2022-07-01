import './App.css';
import {Routes} from 'react-router-dom';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
