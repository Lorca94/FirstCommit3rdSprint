import React from "react";
import { Field } from "formik";
import { Button, FormControl, FormLabel, Input } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const DefaultInput = ({
  name,
  validate,
  label,
  placeholder,
  type,
  ...props
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <Field name={name} validate={validate}>
      {({ field, form }) => (
        <FormControl className="form-control">
          <FormLabel className="form-label" htmlFor={name}>
            <div
              style={{
                display: "flex",
                textTransform: "Capitalize",
                width: "100%",
              }}
            >
              {label}
              {props.isRequired && <div className="primary-color">*</div>}
            </div>
          </FormLabel>

          <div style={{ display: "flex" }}>
            <Input
              {...field}
              className="form-input-text"
              color=""
              fullWidth
              placeholder={placeholder}
              type={type === "password" ? (show ? "text" : "password") : type}
            />
            {type === "password" && (
              <Button onClick={() => setShow(!show)}>
                {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </Button>
            )}
          </div>
          <div className="form-error">{form.errors[name]}</div>
        </FormControl>
      )}
    </Field>
  );
};
