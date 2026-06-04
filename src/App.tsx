import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeCreate } from "./employees/EmployeesCreate.tsx";
import { EmployeeEdit } from "./employees/EmployeesEdit.tsx";
import { EmployeeShow } from "./employees/EmployeeShow.tsx";
import { InternList } from "./interns/InternList";
import { InternCreate } from "./interns/InternCreate.tsx";
import { InternEdit } from "./interns/InternEdit.tsx";
import { InternShow } from "./interns/InternShow.tsx";
import { Dashboard } from './Dashboard'
const dataProvider = jsonServerProvider("http://localhost:3002");

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="employees"
      list={EmployeeList}
      create={EmployeeCreate}
      edit={EmployeeEdit}
      show={EmployeeShow}
      options={{ label:"employees" }}
    />

    <Resource
    name="interns"
    list={InternList}
    create={InternCreate}
    edit={InternEdit}
    show={InternShow}
    options={{ label:"interns" }}
    />

  </Admin>
);
