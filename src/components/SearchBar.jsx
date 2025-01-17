import { useState } from "react";
const SearchBar=({onSearch})=>{
    
    const [city , setCity] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!city.trim()) {
            alert("Please enter the city Name");
            return;
    }
    onSearch(city);
    setCity("");
};

    return(
        <>
        <div className="searchbar">
        <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter your City" value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button type="submit">Search</button>
        </form>
        </div>
        </>
    );
};
export default SearchBar;