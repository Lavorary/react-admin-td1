import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  SearchInput,
  SelectInput,
  Pagination,
  EditButton,
  DeleteButton,
} from "react-admin";

const choices = [
  { id: "Computer science", name: "Computer science" },
  { id: "Marketing", name: "Marketing" },
  { id: "RH", name: "RH" },
  { id: "Finance", name: "Finance" },
];

const employeeFilters = [
  <SearchInput source="q" key={"department"} alwaysOn />,
  <SelectInput
    label="Département"
    source="department"
    key={"department"}
    choices={choices}
  />,
];

export const EmployeeList = () => (
  <List
    filters={employeeFilters}
    perPage={2}
    pagination={<Pagination rowsPerPageOptions={[2]} />}
  >
    <Datagrid rowClick="show">
      <TextField source="firstname" label="First name" />
      <TextField source="lastname" label="Last name" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="Department" />
      <NumberField
        source="salary"
        label="Salary"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="Actif" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
