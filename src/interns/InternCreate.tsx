import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  AutocompleteInput,
  required,
  email,
  minValue,
  FormDataConsumer
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

export const InternCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput
      source="firstname"
      label="Firstname"
      validate={required()}
      fullWidth />

      <TextInput
        source="lastname"
        label="Lastname"
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
        label="Remunerated internship"
        defaultValue={false}
      />

      <FormDataConsumer>
        {({ formData }) => (
          formData.isRemunerated && (
            <NumberInput
              source="remuneration"
              label="Remuneration"
              validate={[required(), minValue(500), validateRemuneration]}
              step={100}
              fullWidth
            />
          )
        )}
      </FormDataConsumer>


    </SimpleForm>
  </Create>
);