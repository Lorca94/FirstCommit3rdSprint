import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>
        Openbootcamp <span className="primary-color">| Alumnos</span>
      </h1>
      <div className="usermenu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "black" }}
        >
          Usuario
          <ArrowDropDownIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/login")}>Cerrar Sesión</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
