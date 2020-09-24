import React, { Component } from "react";
import { data, json } from "./analytics_data";
import { DataTables } from "survey-analytics/survey.analytics.datatables.js";
import * as Survey from "survey-react";
import $ from "jquery";
import "../node_modules/datatables.net/js/jquery.dataTables.js";
import "../node_modules/datatables.net-dt/js/dataTables.dataTables.js";
import "../node_modules/datatables.net-buttons/js/dataTables.buttons.js";
import "../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../node_modules/datatables.net-colreorder/js/dataTables.colReorder.js";
import "../node_modules/datatables.net-rowgroup/js/dataTables.rowGroup.js";
import "../node_modules/datatables.net-colreorder-dt/css/colReorder.dataTables.css";
import "survey-analytics/survey.analytics.datatables.css";

export default class SurveyAnalyticsDatatables extends Component {
  visPanel;
  componentDidMount() {
    DataTables.initJQuery($);
    const survey = new Survey.SurveyModel(json);
    this.visPanel = new DataTables(survey, data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
