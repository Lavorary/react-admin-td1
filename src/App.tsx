import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { EmployeeCreate } from "./employees/EmployeesCreate.tsx";
import { EmployeeEdit } from "./employees/EmployeesEdit.tsx";
import { EmployeeShow } from "./employees/EmployeeShow.tsx";

const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={ListGuesser}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
    />
  </Admin>
);
