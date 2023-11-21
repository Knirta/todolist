import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useAppDispatch } from "../../hooks/hooks";
import { useFilter } from "../../hooks/useFilter";
import { statusFilterConst } from "../../redux/filters/constants";
import { setStatusFilter } from "../../redux/filters/slice";

const StatusFilter = () => {
  const dispatch = useAppDispatch();

  const { statusFilter } = useFilter();

  const handleChange = (_: React.MouseEvent<HTMLElement>, filter: string) => {
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
