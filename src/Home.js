import React from "react";
import logo from "./logo.png";

export function HomePage() {
    return (
        <div className="container">
            <div className="col-lg-3 centered">
                <img className="App-logo" src={logo} alt="ReactJS"/>
            </div>
            <div className="col-lg-9 jumbotron">
                <h1>블링커스 공부유형 검사</h1>
                <p>
                더 나은 내일을 위해 오늘의 노력과 집중이 필요한 순간이 있습니다. 집중을 위한 최적의 공간 컨설팅, 블링커스 입니다.</p>
            </div>
        </div>
    );
  }
  