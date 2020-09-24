import React, { Component } from "react";
import { data, json } from "./analytics_data";
import { VisualizationPanel } from "../node_modules/survey-analytics";
import "../node_modules/survey-analytics/survey.analytics.css";
import * as Survey from "../node_modules/survey-react";

export default class SurveyAnalytics extends Component {
  visPanel;
  componentDidMount() {
    const survey = new Survey.SurveyModel(json);
    this.visPanel = new VisualizationPanel(survey.getAllQuestions(), data);
    this.visPanel.render(document.getElementById("summaryContainer"));
  }
  render() {
    return <div id="summaryContainer"></div>;
  }
}
