export const setStatusFilter = (value: string) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};

// const handleStatusFilter = (
//     e: React.MouseEvent<HTMLElement>,
//     newStatus: string
//   ) => {
//     setStatusFilter(newStatus);
//   };

export const setTextFilter = (value: string) => {
  return {
    type: "filters/setTextFilter",
    payload: value,
  };
};

// onFilterChange={(e) => setTextFilter(e.target.value)}
