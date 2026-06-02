import {
  BooleanField,
  DataTable,
  EmailField,
  List,
  Pagination,
  SearchInput,
  SelectInput,
} from 'react-admin';

const choices = [
  { id: 'Computer science', name: 'Computer science' },
  { id: 'Marketing', name: 'Marketing' },
  { id: 'RH', name: 'RH' },
  { id: 'Finance', name: 'Finance' }
]
;
const remunerationChoices = [
  {id : true, name : true},
  {id : false, name : false}
]
const internFilters = [
  <SearchInput source={"q"}  alwaysOn />,
  <SelectInput
  source={"department"}
  label={"Department"}
  choices={choices}
  />,
  <SelectInput
    source={"isRemunerated"}
    label={"is remunerated"}
    choices={remunerationChoices}
  />


]

export const InternList = () => (
  <List
    filters={internFilters}
    perPage={5}
    pagination={<Pagination rowsPerPageOptions={[5]} />}
  >
    <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="firstname" />
            <DataTable.Col source="lastname" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="department" />
            <DataTable.Col source="managerId" />
            <DataTable.Col source="isRemunerated">
                <BooleanField source="isRemunerated" />
            </DataTable.Col>
            <DataTable.NumberCol source="remuneration" />
        </DataTable>
  </List>
)