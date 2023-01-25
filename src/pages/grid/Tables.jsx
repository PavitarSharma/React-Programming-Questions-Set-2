import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  
];


export default function Tables({ gridData }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Box sx={{ height: 400, maxWidth: "500px", width: "100%", margin: {md: "0", xs: "0 20px"} }}>
        <DataGrid
          rows={gridData}
          columns={columns}
          pageSize={5}
         
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
}
