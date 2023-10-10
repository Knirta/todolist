import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { statusFilterConst } from "../../constants/constants";

interface IProps {
  statusFilter: string;
  handleStatusFilter: (
    e: React.MouseEvent<HTMLElement>,
    newStatus: string
  ) => void;
}

const StatusFilter = ({ statusFilter, handleStatusFilter }: IProps) => {
  return (
    <ToggleButtonGroup
      value={statusFilter}
      onChange={handleStatusFilter}
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
