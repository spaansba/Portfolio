import type { AnyFieldApi } from "@tanstack/react-form";
import React from "react";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-red-300">
          {field.state.meta.errors.map((error, i) => 
            typeof error === 'string' 
              ? error 
              : error.message || 'Invalid input'
          ).join(", ")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

export default FieldInfo;
