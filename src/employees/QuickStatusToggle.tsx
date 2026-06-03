import { useRecordContext, useUpdate, Button } from 'react-admin';

interface Employee {
  id: string;
  firstname: string;
  online: boolean;
}

export const QuickStatusToggle = () => {
  const record = useRecordContext<Employee>();

  const [update, { isLoading }] = useUpdate();

  const handleToggle = () => {
    if (!record) return;

    const newStatus = record.online !== true;

    update(
      'employees',
      {
        id: record.id,
        data: { online: newStatus },
        previousData: record
      }
    );
  };

  if (!record) return null;

  return (
    <Button
      onClick={handleToggle}
      disabled={isLoading}
      label={record.online === true ? 'disable' : 'enable' }
      sx={{
        backgroundColor: record.online === true ? 'red' : 'green',
        color: 'white',
        '&:hover': {
          backgroundColor: record.online === true ? '#ff7875' : '#73d13d',
        }
      }}
    />
  );
};