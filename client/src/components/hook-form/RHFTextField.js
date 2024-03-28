import React from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export const RHFTextField = ({ name, helperText, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
        />
      )}
    />
  );
};

RHFTextField.propTypes = {
    name: PropTypes.string,
    helperText: PropTypes.node,
  };
