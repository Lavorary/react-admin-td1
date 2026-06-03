import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  required,
  minValue,
  email,
} from "react-admin";

export const EmployeeCreate = () => (
  <Create>
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
        label="Department"
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
        label="salary (€)"
        validate={[
          required(),
          minValue(1500, "the minimum value of the salary is 1500 €"),
        ]}
        step={500}
        fullWidth
      />
      <BooleanInput
        source="online"
        label="online"
        defaultValue={false}
      />
    </SimpleForm>
  </Create>
);
