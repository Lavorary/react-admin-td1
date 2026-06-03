import { useRecordContext, useGetOne } from 'react-admin';


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
    <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <h3>Manager</h3>
      <p><b>Firstname</b> : {manager.firstname}</p>
      <p><b>Lastname</b> : {manager.lastname}</p>
      <p><b>Department</b> : {manager.department}</p>
      <p><b>Email</b> : {manager.email}</p>
      <p><b>Status</b> : {manager.online === true ? 'online' : 'notOnline'}</p>
    </div>
  );
};