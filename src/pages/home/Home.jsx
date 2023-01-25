import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Home = ({
  onHandleSubmit,
  selectData,
  setSelectData,
  data,
  isLoading,
}) => {

    if(isLoading) {
        return <p>Loading...</p>
    }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        marginTop: "10rem",
      }}
    >
        
      <FormControl
        sx={{
          maxWidth: "250px",
          width: "100%",
        }}
      >
        <InputLabel id="selectData">Select</InputLabel>
        <Select
          labelId="selectData"
          id="selectData"
          value={selectData}
          onChange={(event) => setSelectData(event.target.value)}
          label="Select"
        >
          <MenuItem value="">
            <em>Select a value</em>
          </MenuItem>
          {data &&
            data?.map((item) => {
              return (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
        <Button
          onClick={onHandleSubmit}
          variant="outlined"
          sx={{
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
