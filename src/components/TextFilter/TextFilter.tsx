import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useFilter } from "../../hooks/useFilter";
import { setTextFilter } from "../../redux/filters/slice";

const TextFilter = () => {
  const dispatch = useDispatch();

  const { textFilter } = useFilter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextFilter(e.target.value));
  };

  return (
    <TextField
      value={textFilter}
      placeholder="text filter..."
      onChange={handleChange}
      fullWidth
    />
  );
};

export default TextFilter;
