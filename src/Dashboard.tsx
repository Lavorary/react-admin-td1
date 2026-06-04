import { useGetList } from 'react-admin';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

export const Dashboard = () => {
  const { total: totalEmployees } = useGetList('employees', { pagination: { page: 1, perPage: 1 } });
  const { total: activeEmployees } = useGetList('employees', { filter: { online: true }, pagination: { page: 1, perPage: 1 } });
  const { total: totalInterns } = useGetList('interns', { pagination: { page: 1, perPage: 1 } });
  const { total: remuneratedInterns } = useGetList('interns', { filter: { isRemunerated: true }, pagination: { page: 1, perPage: 1 } });

  const data = [
    { id: 1, Indicator: 'Total employees',Resource:'employees', Filter:'(none)',Value: totalEmployees || 0 },
    { id: 2, Indicator: 'Online employees',Resource:'employees',Filter: 'active : true', Value: activeEmployees || 0 },
    { id: 3, Indicator: 'Total interns',Resource:'interns', Filter:'(none)', Value: totalInterns || 0 },
    { id: 4, Indicator: 'Remunerated interns',Resource:'interns',Filter: 'isRemunerated : true', Value: remuneratedInterns || 0 }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left"><b>Indicator</b></TableCell>
              <TableCell align="left"><b>Resource</b></TableCell>
              <TableCell align="left"><b>Filter</b></TableCell>
              <TableCell align="left"><b>Value</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.Indicator}
                </TableCell>
                <TableCell>
                  {row.Resource}
                </TableCell>
                <TableCell>
                  {row.Filter}
                </TableCell>
                <TableCell align="left">
                  {row.Value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};