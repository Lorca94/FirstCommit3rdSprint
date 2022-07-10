import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import tecnologias from "../data/tecnologias.json";

export const FiltroHabilidades = () => {
  const [etiquetas, setEtiquetas] = React.useState([]);

  const resetValues = () => {
    setEtiquetas([]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let value = etiquetas;
    value.push(e.target.value);
    setEtiquetas(value);
  };

  return (
    <div className="filtros">
      <div className="filtros__titulo">
        <h3>Filtros de búsqueda</h3>
        <button type="button" onClick={resetValues}>
          <DeleteIcon className="primary-color" />
        </button>
      </div>
      <div className="filtros__func">
        <div className="filtros__etiquetas">
          <h4>Etiquetas</h4>
          <datalist id="habilidades" name="habilidades">
            {tecnologias.map((index) => {
              return (
                <option
                  style={{ textTransformation: "capitalize" }}
                  key={index.id}
                >
                  {index.tecnologia}
                </option>
              );
            })}
          </datalist>
          <div style={{display:'flex'}}>
            <input
              type="search"
              id='search-etiqueta'
              placeholder="Escribe para buscar etiquetas"
              list="habilidades"
            />
            <button className="btn btn-ghost" type="button" >
              <DataSaverOnIcon />
            </button>
          </div>
          <div className="filtros__etiquetas-container">
            {etiquetas.length !== [] ? (
              etiquetas.map((index, id) => {
                return (
                  <div className="filtros__etiquetas-views" key={id}>
                    {index}
                  </div>
                );
              })
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
