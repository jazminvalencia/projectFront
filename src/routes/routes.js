import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/User",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "Captura de Prospectos",
        component: UserProfile
      },
      {
        path: "table",
        name: "Listados de Prospectos",
        component: TableList
      },
      {
        path: "typography",
        name: "Evaluacion de prospectos",
        component: Typography
      }
    ]
  }
];

export default routes;
