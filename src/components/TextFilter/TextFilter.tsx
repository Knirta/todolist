import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { selectTextFilter } from "../../redux/filters/selectors";
import { setTextFilter } from "../../redux/filters/slice";

const TextFilter = () => {
  const dispatch = useDispatch();

  const textFilter = useSelector(selectTextFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextFilter(e.target.value));
  };

  return <TextField value={textFilter} onChange={handleChange} />;
};

export default TextFilter;
