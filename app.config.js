
const widgetConfig = {
  // Paths to all custom fonts used in all widgets
  widgets: [
    {
      name: "Hello", // This name will be the **name** with which we will reference our widget.
      label: "My Hello Widget", // Label shown in the widget picker
      minWidth: "320dp",
      minHeight: "120dp",
      description: "This is my first widget", // Description shown in the widget picker
      previewImage: "./assets/widget-preview/hello.png", // Path to widget preview image
    },
  ],
};

export default ({ config }) => ({
  ...config,
  name: "My Expo App Name",
  plugins: [["react-native-android-widget", widgetConfig]],
});
