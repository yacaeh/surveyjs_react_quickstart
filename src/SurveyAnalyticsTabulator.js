import React, { Component } from "react";
import { data, json } from "./analytics_data";
import { Tabulator } from "../node_modules/survey-analytics/survey.analytics.tabulator.js";
import * as Survey from "../node_modules/survey-react";
import "../node_modules/survey-analytics/survey.analytics.tabulator.css";
import "../node_modules/tabulator-tables/dist/css/tabulator.min.css";
export default class SurveyAnalyticsTabulator extends Component {
  visPanel;
  componentDidMount() {
    const survey = new Survey.SurveyModel(json);
    this.visPanel = new Tabulator(survey, data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
