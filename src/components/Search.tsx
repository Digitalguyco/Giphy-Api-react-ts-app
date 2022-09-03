import {BsSearch} from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state';
import axios from "axios";

  
// Search Component
const Search: React.FC  = () => {
    const [searchdata, setsearchdata] = useState('')

    const dispatch = useDispatch();
  // Get all  necessary action creators from redux
    const {loading,  notloading, adddata, error,noterror} = bindActionCreators(actionCreators, dispatch);

    // Search handler
    const searchHandler = (e: React.FormEvent) => {
      
        const result = (e.target as HTMLInputElement).value;
        setsearchdata(result);
        };

        // Search submit handler
        const makeSearch = async (e: React.FormEvent) => {
          e.preventDefault();
          loading();
          // console.log(searchdata)
          try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
              params: {
                api_key: "MtQTege7W2Z80Cj1EBmX7AbC126ld0fy",
                q: searchdata,
                limit: 50
              }
            });
            if (results.data.data.length !== 0){
            adddata(results.data.data);}else{
              setTimeout(() => error(), 2000);
              setTimeout(() => noterror(), 5000);
            }
          } catch (err) {
            error();
            setTimeout(() => noterror(), 5000);
          }
          notloading();
          setsearchdata('');
        }
        // setTimeout(() => makeSearch(), 2000);

        

  return (
    

    <form className="container" onSubmit={makeSearch}>
        <input
          value={searchdata}
          onChange={searchHandler}
          type="text"
          placeholder="search"
          className="js-search"
        /><i className="fa fa-search"><BsSearch/></i>

      </form>
 
 
  );
};

export default Search;