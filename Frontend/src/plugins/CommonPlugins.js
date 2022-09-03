import commonFunctions from "@/config/CommonFunctions";

export default {
  install: (app, option) => {
    // Global Components
    // app.component('Dropdown', Dropdown);
    // app.component('PopupModel', PopupModel);

    // Global Function using mixin
    app.mixin({
      methods: {
        ...commonFunctions,
      },
    });
  },
};
