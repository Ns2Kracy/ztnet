import React, { useState } from "react";
import { useRouter } from "next/router";
import { LayoutAuthenticated } from "~/components/layouts/layout";
import Members from "./members";
import Controller from "./controller";
import Settings from "./settings";

const AdminSettings = () => {
  const router = useRouter();
  const { tab = "members" } = router.query;

  const tabs = [
    {
      name: "Site",
      value: "site",
      component: <Settings />,
    },
    {
      name: "Members",
      value: "members",
      component: <Members />,
    },
    { name: "Controller", value: "controller", component: <Controller /> },
    // { name: "Mail", value: "mail", component: <MailSettings /> },
    // {
    //   name: "Notification",
    //   value: "notification",
    //   component: <NotificationSettings />,
    // },
  ];

  const changeTab = async (tab) => {
    await router.push({
      pathname: "/admin",
      query: { tab: tab.value },
    });
  };
  return (
    <div>
      <div className="tabs flex justify-center p-3">
        {tabs.map((t) => (
          <a
            key={t.value}
            onClick={() => changeTab(t)}
            className={`tab tab-bordered text-lg ${
              t.value === tab ? "tab-active" : ""
            }`}
          >
            {t.name}
          </a>
        ))}
      </div>
      {tabs.find((t) => t.value === tab)?.component}
    </div>
  );
};

AdminSettings.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default AdminSettings;
