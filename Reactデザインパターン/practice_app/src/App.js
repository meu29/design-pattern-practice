import React from "react"
import OkidoMakerComponent from "./OkidMaker"
import AutoOkidoMakerComponent from "./AutoOkidMaker"
import MouseTrackerComponent from "./MouseTracker"
import "./App.css"

class AppComponent extends React.Component {

  render() {
    return (
      <>
      <OkidoMakerComponent />
      <AutoOkidoMakerComponent />
      <MouseTrackerComponent />
      </>
    )
  }

}

export default AppComponent;