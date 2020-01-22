import { mount } from "react-mounter";
import { FlowRouter } from "meteor/kadira:flow-router";
import Dashboard from "../ui/pages/dashboard/index";
import React from "react";

FlowRouter.route("/", {
  name: "dashboard",
  action() {
    mount(Dashboard, {
      content: <Dashboard />
    });
  }
});
