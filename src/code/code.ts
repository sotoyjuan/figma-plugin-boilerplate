const notifications = {
  hello: "Hello world",
};

figma.ui.onmessage = (msg) => {
  if (msg.type === "hello") {
    figma.notify(notifications.hello);
  }
};

figma.showUI(__html__, { width: 640, height: 380, themeColors: true });
