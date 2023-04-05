import React from "react";
import { CustomProps } from "./types";
import { WithMyTemplateElementProps } from "../../types";

export const Custom = ({
  CustomTemplate,
  customName,
  myname,
  modifiers,
  contentConditions,
  ...props
}: CustomProps & WithMyTemplateElementProps) => {
  return <CustomTemplate {...props} />;
};
