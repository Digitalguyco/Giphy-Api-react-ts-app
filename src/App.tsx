import React from 'react';
import Footer from './components/Footer';
import Giphy from './components/Giphy';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Spinner from "./components/Spinner";
import Error from "./components/Error";
import {  useSelector } from 'react-redux';
import { RootState } from './state/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App: React.FC = () => {


  const loadingstate = useSelector((state: RootState) => state.loading)
  const errorstate = useSelector((state: RootState) => state.error)
  console.log(loadingstate)
  // console.log(errorstate)

  return (
    <>
      <Header  />
      {errorstate && <Error />}
      <Container className='loader'>
      {loadingstate?  <Spinner />: null}    
  </Container>

      <Giphy/>
      <Footer/>
    </>
    
  );
}

export default App;
