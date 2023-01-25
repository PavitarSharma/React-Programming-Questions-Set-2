import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyItems="flex-start"
        alignItems="center"
        gap="20px"
        p={4}
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
          borderBottom: "1px solid gray"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/grid">Grid Table</Link>
      </Stack>
    </>
  );
};

export default Header;
