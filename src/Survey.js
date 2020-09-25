import React, { useState, useEffect } from "react";
import * as Survey from "survey-react";
import * as widgets from "surveyjs-widgets";
import "survey-react/survey.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import { survey1 } from "./surveyfiles/1.js";
import { survey2 } from "./surveyfiles/2.js";
import { survey3 } from "./surveyfiles/3.js";
import { survey4 } from "./surveyfiles/4.js";
import { survey5 } from "./surveyfiles/5.js";

//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("stone");

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
    console.log(result);
    console.log(result.valuesHash)
}

function surveyFile(file){
    let model;
    if (file =='survey1'){
        model = new Survey.Model(survey1)
    }
    else if (file =='survey2'){
        model = new Survey.Model(survey2)
    }
    else if (file =='survey3'){
        model = new Survey.Model(survey3)
    }
    else if (file =='survey4'){
        model = new Survey.Model(survey4)
    }
    else if (file =='survey5'){
        model = new Survey.Model(survey5)
    }
    else {
        model = new Survey.Model('')
    }
    return (
        <Survey.Survey 
        model={model}
        onComplete={onComplete}
        onValueChanged={onValueChanged}/>    
    )
}


export function SurveyPage() {
    const [file, setFile] = useState('');
    const onChangeHandler = (event) =>  {
        setFile(event.target.value);
    }

    return (
        <div className="container">
            <h2>블링커스 학습유형 검사</h2>
            <select value={file} onChange={onChangeHandler}>
                <option value=''>선택안함</option>
                <option value='survey1'>학습형태 유형</option>
                <option value='survey2'>학습장소 유형</option>
                <option value='survey3'>환경반응 유형</option>
                <option value='survey4'>학습긴장 유형</option>
                <option value='survey5'>학습집중 유형</option>
            </select>
            {surveyFile(file)}
        </div>
        );
}