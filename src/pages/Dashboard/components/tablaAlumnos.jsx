import React from "react";
import {
  Box,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import data from "../data/alumnos.json";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { RegisterAlumno } from "./RegisterAlumnos";

export const TablaAlumnos = () => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    console.log(openModal);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const onHandleChange = (e) => {
    setInputSearchValue(e.target.value);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const filterByText = () => {
    let values = data.filter((i) => {
      if (
        i.nombreCompleto.toLowerCase().includes(inputSearchValue.toLowerCase())
      ) {
        return i;
      }
      if (i.ciudad.toLowerCase().includes(inputSearchValue.toLowerCase())) {
        return i;
      }
      if (i.telefono.toLowerCase().includes(inputSearchValue.toLowerCase())) {
        return i;
      }
      if (i.email.toLowerCase().includes(inputSearchValue.toLowerCase())) {
        return i;
      }

      return null;
    });
    return values;
  };

  let alumnos;
  if (inputSearchValue === "") {
    alumnos = data;
  } else {
    alumnos = filterByText();
  }

  return (
    <div className="alumnos-tb">
      <div className="tb__header">
        <div className="tb__header-left">
          <h2 style={{ marginRight: "15px" }}>Alumnos</h2>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Filtrar por nombre, ciudad..."
              name="filtroBusqueda"
              onChange={onHandleChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="input-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <button className="btn btn-plus" onClick={handleOpen}>
          <Add />
          Añadir alumno
        </button>
        <Modal
          hideBackdrop
          open={openModal}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...modalStyle, width: 800 }}>
            <h2 id="child-modal-title">Registro de Alumnos</h2>
            <RegisterAlumno />
          </Box>
        </Modal>
      </div>

      <div className="table">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="tabla alumnos">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Ciudad</TableCell>
                <TableCell>País</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Correo electrónico</TableCell>
                <TableCell>Certificaciones</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {alumnos.map((index) => {
                return (
                  <TableRow key={index.id}>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      {index.nombreCompleto}
                    </TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      {index.ciudad}
                    </TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      {index.pais}
                    </TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      {index.telefono}
                    </TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      {index.email}
                    </TableCell>
                    <TableCell
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/ficha/" + index.id);
                      }}
                    >
                      <div className="certificaciones">
                        {index.certificaciones.map((index, key) => {
                          return key < 3 ? (
                            <div className="certificacion">{index}</div>
                          ) : key === 3 ? (
                            <div className="certificacion">...</div>
                          ) : null;
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
