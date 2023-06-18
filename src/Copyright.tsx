import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      sx={{ mt: 1.5 }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Challenge by "}
      <MuiLink
        color="inherit"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        {"Frontend Mentor"}
      </MuiLink>
      <br />
      {"Coded by "}
      <MuiLink color="inherit" href="https://delaguilaluis.com">
        {"Luis Del Águila"}
      </MuiLink>
      <br />
      {new Date().getFullYear()}.
    </Typography>
  );
}
