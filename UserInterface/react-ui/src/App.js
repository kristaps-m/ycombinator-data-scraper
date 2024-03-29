import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import {Home} from './components/Home';
import MuiTable from './components/MuiTable';
import MuiTableTEST from './components/MuiTableTEST';
import {variables} from './Variables.js'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'; 

function App() {
  const [hackerdataList, setPosts] = useState([]);
  const [homesDtoList, setPosts2] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [postsPerPage] = useState(10);
  const uri = variables.API_URL+'Hackerdata';
  const housesData = variables.API_ALL_HOMEDTO;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(uri); 
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [uri]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(housesData); 
      setPosts2(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [housesData]);

  //console.log(hackerdataList);
  console.log(homesDtoList);

    // Get current posts
  //const indexOfLastPost = currentPage * postsPerPage;
  //const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //const currentPosts = hackerdataList.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
  //const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
    <div className="App">
      <h3 className = "d-flex justify-content-center m-3">
        React JS FrontEnd
      </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/">
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/table">
              Y-Combinator data table
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/houses">
              House Table
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/table' element={<MuiTable hackerdataList={hackerdataList}/>}/>
        <Route path='/houses' element={<MuiTableTEST hackerdataList={homesDtoList}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
