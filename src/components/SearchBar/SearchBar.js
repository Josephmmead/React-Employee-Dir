import React from 'react';
import './SearchBar.css'

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2 SearchInput"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    // onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
  
}

export default SearchBar