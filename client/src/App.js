

import Header from './components/header/header';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/home';
import DetailView from './components/detail/DetailView';
import { Box } from '@mui/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <div className="App">
      <Header/>
      <Box style={{marginTop: 64}}>
       <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/product/:id' element={<DetailView/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
      </Box>
    </div>
    </BrowserRouter> 
  );
}

export default App;
