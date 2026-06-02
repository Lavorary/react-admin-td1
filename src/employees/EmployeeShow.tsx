import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  EditButton,
} from "react-admin";

const EmployeeActions = () => (
  <TopToolbar>
    <ListButton label="return" />
    <EditButton label="modify" />
  </TopToolbar>
);

export const EmployeeShow = () => (
  <Show actions={<EmployeeActions />}>
    <SimpleShowLayout>
      <TextField source="id" label="ID" />
      <TextField source="firstname" label="first name" />
      <TextField source="lastname" label="last name" />
      <TextField source="email" label="Email" />
      <TextField source="department" label="department" />
      <NumberField
        source="salary"
        label="salary"
        options={{ style: "currency", currency: "EUR" }}
      />
      <BooleanField source="active" label="active" />
    </SimpleShowLayout>
  </Show>
);
