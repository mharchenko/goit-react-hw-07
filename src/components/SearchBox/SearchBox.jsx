


import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';


const SearchBox = () => {
  const dispatch = useDispatch()
  return (
  <div className={s.searchBox}>
    <label className={s.label}>Find contacts by name:</label>
    <input
      type="text"
      
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={s.input}
    />
  </div>)
};

export default SearchBox;
