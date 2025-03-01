"use client";

import * as React from "react";
import RouterLink from "next/link";
// import { deleteUser } from '@/services/user-service';
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { type User } from "@/types/user";
import { formatDateString } from "@/lib/format-date-string";
import { paths } from "@/types/paths";

// import { createLogger } from '@/lib/logger';

function noop(): void {
  // do nothing
}

interface UsersTableProps {
  count?: number;
  page?: number;
  users?: User[];
  rowsPerPage?: number;
  onPageChange?: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  onRowsPerPageChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  // onUserDeleted?: () => void;
}

export function UsersTable({
  count = 0,
  users = [],
  page = 1,
  rowsPerPage = 5,
  onPageChange = noop,
  onRowsPerPageChange = noop,
  // onUserDeleted = noop,
}: UsersTableProps): React.JSX.Element {
  React.useMemo(() => {
    return users.map((User) => User._id);
  }, [users]);

  // async function handleDeleteUser(id: string): Promise<void> {
  //   try {
  //     await deleteUser(id);
  //     onUserDeleted();
  //   } catch (error) {
  //     // console.error('Error fetching users data:', error);
  //     createLogger().error('Error deleting users data:', error);
  //   }
  // }

  return (
    <Card>
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Time Zone</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users !== null
              ? users.map((row) => {
                  return (
                    <TableRow
                      hover
                      key={row._id}
                      // component={RouterLink}
                      // href={`${paths.dashboard.updateUser}/${row._id}`}
                    >
                      <TableCell>
                        <Stack
                          sx={{ alignItems: "center" }}
                          direction="row"
                          spacing={2}
                        >
                          <Avatar src={row.avatar} />
                          <Typography variant="subtitle2">
                            {row.name}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.verified?.toString()}</TableCell>
                      {row.role === "user" ? (
                        <TableCell sx={{ color: "blue" }}>broker</TableCell>
                      ) : (
                        <TableCell sx={{ color: "teal", font: "bold" }}>
                          {row.role}
                        </TableCell>
                      )}
                      <TableCell>{row.timeZone}</TableCell>
                      {row.isActive ? (
                        <TableCell sx={{ color: "green", text: "center" }}>
                          Active
                        </TableCell>
                      ) : (
                        <TableCell sx={{ color: "red", text: "center" }}>
                          Inactive
                        </TableCell>
                      )}
                      {/* <TableCell>Update</TableCell> */}
                      <TableCell>
                        <Button
                          size="small"
                          variant="contained"
                          // onClick={() => handleDeleteUser(row._id)}
                          component={RouterLink}
                          href={`${paths.dashboard.user}/${row._id!}`}
                          // sx={{ background: 'orange' }}
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              : ""}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 50, 100]}
      />
    </Card>
  );
}
