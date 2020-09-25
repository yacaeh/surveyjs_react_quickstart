import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Home";
import { CreatorPage } from "./Creator";
import { SurveyPage } from "./Survey";
import { ExportToPDFPage } from "./Export";
import { AnalyticsPage } from "./Analytics";
import { AnalyticsTabulatorPage } from "./AnalyticsTabulator";
import { AnalyticsDatatablesPage } from "./AnalyticsDatatables";

import "bootstrap/dist/css/bootstrap.css";

export default function SurveyJSReactApplication() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                블링커스
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/survey">유형검사</Link>
              </li>
              <li>
                <Link to="/creator">검사지 만들기</Link>
              </li>
              {/* <li>
                <Link to="/export">PDF로 만들기</Link>
              </li> */}
              <li>
                <Link to="/analytics">분석결과</Link>
              </li>
              <li>
                <Link to="/analyticstabulator">결과 테이블</Link>
              </li>
              {/* <li>
                <Link to="/analyticsdatatables">
                  결과테이블 (IE 버전)
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/survey">
            <SurveyPage />
          </Route>
          <Route path="/creator">
            <CreatorPage />
          </Route>
          {/* <Route path="/export">
            <ExportToPDFPage />
          </Route> */}
          <Route path="/analytics">
            <AnalyticsPage />
          </Route>
          {/* <Route path="/analyticsdatatables">
            <AnalyticsDatatablesPage />
          </Route> */}
          <Route path="/analyticstabulator">
            <AnalyticsTabulatorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
