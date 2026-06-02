import {
  List,
  BooleanField,
  SearchInput,
  SelectInput,
  DataTable,
  EmailField,
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
  <List filters={employeeFilters}>


        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="firstname" />
            <DataTable.Col source="lastname" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="department" />
            <DataTable.NumberCol source="salary" />
            <DataTable.Col source="online">
                <BooleanField source="online" />
            </DataTable.Col>
        </DataTable>
    </List>
);
