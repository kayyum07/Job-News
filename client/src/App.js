import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter, useNavigate, Navigate} from 'react-router-dom';
import HomePage  from './Pages/HomePage';
import AddNews from './Pages/AddNews';
import NewsDesc from './Pages/NewsDesc';
import LandingPage from './Pages/LandingPage';
import PostedNewsItems from './Pages/PostedNewsItems';
import EditNews from './Pages/EditNews';

function App() {
  // const navigate= useNavigate();
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
          <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/add' element={<ProtectedRoute><AddNews/></ProtectedRoute>} />
            <Route path='/edit/:newsid' element={<ProtectedRoute><EditNews/></ProtectedRoute>} />
            <Route path='/posted' element={<ProtectedRoute><PostedNewsItems /></ProtectedRoute>} />
            <Route path='/newsdesc/:newsid' element={<ProtectedRoute><NewsDesc/></ProtectedRoute>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;


export const ProtectedRoute=({children})=>{

  if(localStorage.getItem('sharenews-user')){
        return children
  }else{
      return <Navigate to='/' />
  }

}