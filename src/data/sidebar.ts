import { AppRoutes, IApp } from "@/interfaces";

const getSidebarData = (userType: IApp.AppRoles) => {
  const sidebarData: IApp.SidebarData[] = [getDashboardSidebarItem(userType)];
  if (userType === IApp.AppRoles.ADMIN) {
    sidebarData.push(
      ...[
        {
          title: "Users",
          icon: "mdi-account-group",
          to: AppRoutes.Admin.USERS.ROOT,
          value: "users",
        },
      ]
    );
  } else {
    sidebarData.push(...[]);
  }

  return sidebarData;
};

const getDashboardSidebarItem = (userType: IApp.AppRoles): IApp.SidebarData => {
  return {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to:
      userType === IApp.AppRoles.ADMIN
        ? AppRoutes.Admin.DASHBOARD
        : AppRoutes.User.DASHBOARD,
    value: "dashboard",
  };
};

export default getSidebarData;
