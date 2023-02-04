import React, { Component } from "react";
import "./monitor.scss";
import { data } from "./graphData";

class Monitor extends Component {
  render() {
    return (
      <div className="flex flex-row h-[100%] w-[100%]">
        <p className="text-[white] text-[1rem] ml-10 mt-10">Link:</p>
        <a
          href="https://octoprint.remote3dprinter.info/"
          className="text-[white] text-[1rem] ml-2 mt-10"
        >
          {" "}
          https://octoprint.remote3dprinter.info/
        </a>
      </div>
    );
  }
}
export default Monitor;
