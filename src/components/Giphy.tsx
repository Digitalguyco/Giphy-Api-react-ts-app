//  Imports for Giphy
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state';
import { RootState } from '../state/reducers';
import Card from 'react-bootstrap/Card';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"

// Giphy component
const Giphy: any  = () => {
      const state = useSelector((state: RootState) => state.data)
    const dispatch = useDispatch();
    const {adddata,  notloading, error, noterror} = bindActionCreators(actionCreators, dispatch);
    // Items per page, 10 by default
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const indexOfLastItem = 1 * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Current items
    const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);
    
    

    
useEffect(() => {
    const getData = async () => {
      noterror();
      
      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "MtQTege7W2Z80Cj1EBmX7AbC126ld0fy",
            limit: 50
          }
        });
          // add results.data.data to state from redux using action creator
        adddata(results.data.data);
      
        setItemsPerPage(10);
        
      } catch (err) {
        error();
      }

    
    };
    
    // getdata function call after 2 seconds
    setTimeout(() => (getData(),notloading()), 2000);
    
    
  }, []);
 
  
  
  // console.log(state)
  // console.log(currentPage)
  // console.log(itemsPerPage)
  // console.log(currentItems)

  // has more items callback function, returns true if there are more items to be fetched
  const hasMore: () => boolean = () => {
        if (itemsPerPage == state.length){
          return false;
        };
        return true;
  }

  // Fecth more items callback function, adds 10 items to current items per page
  const fetchMoreData = () => {
    if(itemsPerPage < state.length){
    setTimeout(() => {
      setItemsPerPage(itemsPerPage + 10);
    }, 1500);}
    
  }
 

  // console.log(hasMore())
  return (
    <>
      {/* Using InfineScroll component for lazyload pagination */}
      <InfiniteScroll
  dataLength={currentItems.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={hasMore()}
  loader={    <Container className='loader'>
  <Spinner />
  </Container>}
  endMessage={
    <Container className='loader'>


    <p className="text-centre">
      <b>Yay! You have seen it all</b>
    </p>
    </Container>
  }

> 
      
<Container> 
      <Row className="justify-content-center">
        {currentItems.map((gif)=> {
        return (
       // <li key={gif.id}>{gif.title} </li>
          <Card style={{ width: '18rem', color: 'white', background: '#8233C5'}} className="mb-2 " key={gif.id}> 
          <Card.Img variant="top" src={gif.images.fixed_height.url} /> 
          <Card.Body  >
            <Card.Title >{gif.title}</Card.Title>
          </Card.Body> 
        </Card>)} )}
        </Row>
    </Container >

</InfiniteScroll>

   
    </>

  )
  
};

export default Giphy;
