import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useSelector, useDispatch } from "react-redux";
import { getStatusFilter } from "../../redux/filter/selectors";
import { statusFilterConst } from "../../redux/filter/constants";
import { setStatusFilter } from "../../redux/filter/actions";

const StatusFilter = () => {
  const dispatch = useDispatch();

  const statusFilter = useSelector(getStatusFilter);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    filter: string
  ) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <ToggleButtonGroup
      value={statusFilter}
      onChange={handleChange}
      exclusive
      aria-label="status filter"
    >
      <ToggleButton value={statusFilterConst.all}>All</ToggleButton>
      <ToggleButton value={statusFilterConst.active}>Active</ToggleButton>
      <ToggleButton value={statusFilterConst.completed}>Completed</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default StatusFilter;
