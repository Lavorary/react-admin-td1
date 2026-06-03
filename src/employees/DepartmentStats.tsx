import { useGetList, useRecordContext } from "react-admin";

interface Employee {
  id: string;
  firstname: string;
  department: string;
  online: boolean;
}

export const DepartmentStats = () => {
  const record = useRecordContext<Employee>();

  const { total, isPending, error } = useGetList<Employee>(
    "employees",
    {
      filter: {
        department: record?.department,
        online: true
      },
      pagination: { page: 1, perPage: 5 }
    },
    { enabled: !!record?.department }
  );

  if (!record) return null;
  if (isPending) return <span>Loading stats...</span>;
  if (error) return <span>Error loading stats</span>;

  return (
    <div style={{ marginTop: "10px",borderTop: '1px solid #ccc' ,padding: "10px", borderRadius: "5px",}}>
      <p>
        <b>Department stats ({record.department}) :</b><br />
        Online coworkers : <b style={{ margin:"25px"}}>{total || 0}</b>
      </p>
    </div>
  );
};