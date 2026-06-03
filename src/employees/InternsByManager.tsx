import { Link, useGetList, useRecordContext } from "react-admin";

interface Employee {
  id: string;
  firstname: string;
  department: string;
}

interface Intern {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
  managerId: number;
  isRemunerated: boolean;
  remuneration: number;
}

export const InternsByManager = () => {
  const record = useRecordContext<Employee>();

  const { data: interns, total, isPending, error } = useGetList<Intern>(
    'interns',
    {
      filter: { managerId: record?.id },
      pagination: { page:1, perPage: 10 },
      sort: { field: 'id', order:'ASC' }
    },
    { enabled: !!record?.id }
  );

  if(!record) return null;
  if(isPending) return <span>Loading interns...</span>
  if(error) return <span>Error loading interns</span>
  if(!interns) return <span>No interns found</span>

  return (
    <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <h3>is supervising ({total}) interns</h3>
      <ul>
        {interns.map((intern) => (
          <li key={intern.id}>
            <Link to={`/interns/${intern.id}/show`}>
              {intern.firstname} {intern.lastname}
            </Link>
            {' - '}{intern.department}
            {intern.isRemunerated && ` - ${intern.remuneration} €`}
          </li>
        ))}
      </ul>
    </div>
  )
}