import React, { Component } from "react";
import * as SurveyKo from "../node_modules/survey-knockout";
import * as SurveyJSCreator from "../node_modules/survey-creator";
import "../node_modules/survey-creator/survey-creator.css";

import "../node_modules/jquery-ui/themes/base/all.css";
import "../node_modules/nouislider/distribute/nouislider.css";
import "../node_modules/select2/dist/css/select2.css";
import "../node_modules/bootstrap-slider/dist/css/bootstrap-slider.css";

import "../node_modules/jquery-bar-rating/dist/themes/css-stars.css";
import "../node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "../node_modules/jquery-ui/ui/widgets/datepicker.js";
import "../node_modules/select2/dist/js/select2.js";
import "../node_modules/jquery-bar-rating";

//import "icheck/skins/square/blue.css";
import "../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "../node_modules/surveyjs-widgets";

SurveyJSCreator.StylesManager.applyTheme("default");

//widgets.icheck(SurveyKo, $);
widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
//widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    let options = { showEmbededSurveyTab: true };
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      null,
      options
    );
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
    this.surveyCreator.tabs().push({
      name: "survey-templates",
      title: "My Custom Tab",
      template: "custom-tab-survey-templates",
      action: () => {
          this.surveyCreator.makeNewViewActive("survey-templates");
      },
      data: {},
    });
    this.surveyCreator.render("surveyCreatorContainer");
  }
  render() {
    return (<div>
      <script type="text/html" id="custom-tab-survey-templates">
        {`<div id="test">TEST</div>`}
      </script>

      <div id="surveyCreatorContainer" />
    </div>);
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.surveyCreator.text));
    // save client side
      const fileData = JSON.stringify(this.surveyCreator.text);
      const blob = new Blob([fileData], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'survey.json';
      link.href = url;
      link.click();
    // save from server
  };
}

export default SurveyCreator;
