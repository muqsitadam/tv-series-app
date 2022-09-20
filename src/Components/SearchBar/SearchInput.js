import React from 'react'

const SearchInput = ({onInputChange, onSearchButton}) => {
    return(
        <div>
            <h2>Search for your favourite series!!</h2>
            <div>
                <input type="search" name="" onChange={onInputChange} />
                <button onClick={onSearchButton} >Search</button>
            </div>
        </div>
    )
}

export default SearchInput