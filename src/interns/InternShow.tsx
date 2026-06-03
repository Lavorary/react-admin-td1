import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  BooleanField,
  TopToolbar,
  ListButton,
  EditButton,
  useRecordContext,
  useGetOne,
  Link,
} from "react-admin";
import { ManagerCard } from "./ManagerCard";

const InternActions = () => (
  <TopToolbar>
    <ListButton label="return" />
    <EditButton label="modify" />
  </TopToolbar>
);

const ManagerDetail = () => {
  const record = useRecordContext();
  if(!record) return null;

  const { data: manager, isLoading, error } = useGetOne('employees', {
  id: record.managerId
});
  if(isLoading) return <span>loading...</span>
  if(error) return <span>something went wrong</span>
  if(!manager) return <span>no manager found</span>

  return (
    <Link to={`/employees/${record.managerId}/show`}>
      {manager.firstname + " " +manager.lastname}
    </Link>
  )

}


export const InternShow = () => (
  <Show actions={<InternActions />}>
    <SimpleShowLayout>
      <TextField source="id" label="Id"/>
      <TextField source="firstname" label="Firstname"/>
      <TextField source="lastname" label="Lastname"/>
      <TextField source="email" label="Email"/>
      <TextField source="department" label="Department" />
      <label>Manager</label>
      <div>
        <ManagerDetail />
      </div>
      <BooleanField source="isRemunerated" label="Is remunerated" />
      <NumberField source="remuneration" label="Remuneration" options={{ style: "currency", currency: "EUR" }} />
      <ManagerCard />
    </SimpleShowLayout>
  </Show>
);