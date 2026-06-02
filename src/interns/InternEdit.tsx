import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  required,
  email,
  useRecordContext
} from 'react-admin';

const validateRemuneration = (value: number, allValues: { isRemunerated: any; }) => {
  if (allValues.isRemunerated && !value) {
    return 'intern is remunerated, remuneration field is required';
  }
  if (allValues.isRemunerated && value < 500) {
    return 'minimal value of remuneration is 500$';
  }
  return undefined;
};

const InternTitle = () => {
  const record = useRecordContext();
  if (!record) return null;
  return <span>Modify : {record.firstname} {record.lastname}</span>;
};

export const InternEdit = () => (
  <Edit title={<InternTitle />}>
    <SimpleForm>
      <TextInput
        source="firstname"
        label="firstname"
        validate={required()}
        fullWidth
      />
      <TextInput
        source="lastname"
        label="lastname"
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
        label="Departement"
        choices={[
          { id: 'Computer science', name: 'Computer science' },
          { id: 'Marketing', name: 'Marketing' },
          { id: 'RH', name: 'RH' },
          { id: 'Finance', name: 'Finance' }
        ]}
        validate={required()}
        fullWidth
      />

      <ReferenceInput
        source="managerId"
        reference="employees"
        label="Manager"
        filter={{ online: true }}
        fullWidth
      >
        <AutocompleteInput
          optionText="firstname"
          validate={required()}
          label="Manager (actif)"
        />
      </ReferenceInput>

      <BooleanInput
        source="isRemunerated"
        label="Intern remunerated"
      />

      <NumberInput
        source="remuneration"
        label="Remunération"
        validate={validateRemuneration}
        step={50}
        fullWidth
      />
    </SimpleForm>
  </Edit>
);