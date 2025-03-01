import * as React from "react";
import Card from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { MagnifyingGlass as MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";

export function UsersFilters({setSearchParam}: Readonly<{setSearchParam:React.Dispatch<React.SetStateAction<string|undefined>>}>): React.JSX.Element {
  return (
    <Card sx={{ p: 2 }}>
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Search user"
        onChange={(e:any)=>setSearchParam(e?.target?.value)}
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
          </InputAdornment>
        }
        sx={{ maxWidth: "500px" }}
      />
    </Card>
  );
}
