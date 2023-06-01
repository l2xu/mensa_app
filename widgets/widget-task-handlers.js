import React from "react";
// import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import { HelloWidget } from "./HelloWidget";

const nameToWidget = {
  // Hello will be the **name** with which we will reference our widget.
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props) {
  const widgetInfo = props.widgetInfo;
  const Widget = nameToWidget[widgetInfo.widgetName];

  switch (props.widgetAction) {
    case "WIDGET_ADDED":
      props.renderWidget(<Widget />);
      break;

    case "WIDGET_RESIZED":
      // Not needed for now
      break;

    case "WIDGET_CLICK":
      // Not needed for now
      break;

    default:
      break;
  }
}
