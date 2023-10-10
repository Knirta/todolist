import TextField from "@mui/material/TextField";

interface IProps {
  filter: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ filter, onFilterChange }: IProps) => {
  return <TextField value={filter} onChange={onFilterChange} />;
};

export default Filter;
