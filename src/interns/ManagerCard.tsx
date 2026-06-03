import { useRecordContext, useGetOne, TextField, SimpleShowLayout, EmailField } from 'react-admin';


export const ManagerCard = () => {
  const record = useRecordContext();
  const { data: manager, isPending, error } = useGetOne(
    'employees',
    { id: record?.managerId },
    { enabled: !!record?.managerId }
  );

  if(isPending) return <span>wait a moment...</span>;
  if(error) return <span>something went wrong</span>;
  if(!manager) return <span>manager not found</span>;

  return(
    <SimpleShowLayout>
      <span>Manager resume</span>
      <TextField source="firstname" label="Firstname" record={manager} />
      <TextField source="lastname" label="Lastname" record={manager} />
      <TextField source="department" label="Department" record={manager} />
      <EmailField source="email" label="Email" record={manager}>{manager.email}</EmailField>
    </SimpleShowLayout>
  );
};