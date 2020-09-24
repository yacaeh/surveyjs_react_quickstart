import React from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "../node_modules/survey-react/survey.css";

import "../node_modules/jquery-ui/themes/base/all.css";
import "../node_modules/nouislider/distribute/nouislider.css";
import "../node_modules/select2/dist/css/select2.css";
import "../node_modules/bootstrap-slider/dist/css/bootstrap-slider.css";

import "../node_modules/jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "../node_modules/jquery-ui/ui/widgets/datepicker.js";
import "../node_modules/select2/dist/js/select2.js";
import "../node_modules/jquery-bar-rating";

import "../node_modules/pretty-checkbox/dist/pretty-checkbox.css";

import { json } from "./survey_json.js";

//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

function onValueChanged(result) {
    console.log("value changed!");
}

function onComplete(result) {
    console.log("Complete! " + result);
}


export function SurveyPage() {
    var model = new Survey.Model(json);
    return (
    <div className="container">
        <h2>성격유형 검사</h2>
        <Survey.Survey
            model={model}
            onComplete={onComplete}
            onValueChanged={onValueChanged}
          />
    </div>
    );
  }
  