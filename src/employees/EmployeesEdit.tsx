import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  email,
  useRecordContext,
} from "react-admin";

const EmployeeTitle = () => {
  const record = useRecordContext();
  return record ? (
    <span>
      Modifier : {record.firstname} {record.lastname}
    </span>
  ) : (
    <span>Modify the employee</span>
  );
};

export const EmployeeEdit = () => (
  <Edit title={<EmployeeTitle />}>
    <SimpleForm>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="email"
        label="Email"
        validate={[required(), email()]}
        fullWidth
      />
      <SelectInput
        source="department"
        label="Département"
        choices={[
          { id: "Computer science", name: "Computer science" },
          { id: "Marketing", name: "Marketing" },
          { id: "RH", name: "RH" },
          { id: "Finance", name: "Finance" },
        ]}
        validate={required()}
        fullWidth
      />
      <NumberInput
        source="salary"
        label="Salaire (€)"
        validate={[
          required(),
          minValue(1500, "the minimum value of the salary is 1500 €"),
        ]}
        step={100}
        fullWidth
      />
      <BooleanInput source="online" label="online" />
    </SimpleForm>
  </Edit>
);
