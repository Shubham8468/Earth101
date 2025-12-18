
import "./SearchFilter.css";
const SerachFilter=({search, setSearch, filter, setFilter})=>{
    const handelInputChange=(e)=>{
       
        setSearch(e.target.value);
    }
    const handelSelectionChange=(e)=>{
       
        setFilter(e.target.value);
    }
    console.log(search, filter);
    return(
        <section className="serach-item">
            <input type="text" placeholder="Search .."   onChange={handelInputChange} className="input-item" ></input>
            <select className="serach-items" value={filter} onChange={handelSelectionChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
            </select>
            
        </section>
    )
}
export default SerachFilter;