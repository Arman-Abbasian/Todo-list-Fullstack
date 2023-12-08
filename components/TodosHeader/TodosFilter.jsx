import { useState } from "react";

const TodoFilter = () => {
  const [filter,setFilter]=useState({search:"",condition:"all"})
  const changeHandler=(e)=>{
    setFilter({...filter,[e.target.name]:e.target.value})
  }
    return ( 
        <div>
            <div>
                <label htmlFor="search">search</label>
                <input type="text" name="search" id="search" value={filter.search} 
                onChange={changeHandler}/>
            </div>
            <div>
            <div className="radio">
          <label>
            <input type="radio" value="all"  name="condition"
            checked={filter.condition === "all"}
              onChange={changeHandler}
            />
            All
          </label>
        </div>
                
            <div className="radio">
          <label>
            <input type="radio" value="completed" name="condition"
            checked={filter.condition === "completed"}
              onChange={changeHandler}
            />
            completed
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="uncompleted" name="condition"
              checked={filter.condition === "uncompleted"}
              onChange={changeHandler}
            />
            uncompleted
          </label>
        </div>
            </div>
        </div>
     );
}
 
export default TodoFilter;