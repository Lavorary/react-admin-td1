import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeCreate } from "./employees/EmployeesCreate.tsx";
import { EmployeeEdit } from "./employees/EmployeesEdit.tsx";
import { EmployeeShow } from "./employees/EmployeeShow.tsx";
import { InternList } from "./interns/InternList";
import { InternCreate } from "./interns/InternCreate.tsx";

const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={EmployeeList}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
    />

    <Resource
    name="interns"
    list={InternList}
    create={InternCreate}
    />

  </Admin>
);
