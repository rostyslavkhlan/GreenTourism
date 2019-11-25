import React from 'react';
import './App.css';
import createBrowserHistory from "history/createBrowserHistory";
import Router from "react-router/es/Router";
import Switch from "react-router/es/Switch";
import Route from "react-router/es/Route";
import Preview from "./components/Preview";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import HotelHeader from "./components/HotelHeader";
import PlaceHeader from "./components/PlaceHeader";
import MainPage from "./components/MainPage";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Hotel from "./components/Hotel";
import Place from "./components/Place";

function App() {

  const history = createBrowserHistory();

  return (
      <React.Fragment>
          <Router history={history}>
            <Switch>
              <Route path="/login">
                <div>
                  <AppHeader authButtonsInVisible/>
                  <MainPage>
                    <LoginForm/>
                  </MainPage>
                  <AppFooter/>
                </div>
              </Route>
              <Route path="/registration">
                <div>
                  <AppHeader authButtonsInVisible/>
                  <MainPage>
                    <RegistrationForm/>
                  </MainPage>
                  <AppFooter/>
                </div>
              </Route>
              <Route path="/hotels">
                <div>
                  <AppHeader />
                  <MainPage>
                    <Preview imgURL={"../img/hotelPreviews/zakarpatskiyOazis.jpg"}
                             href={"./hotel"}
                             name={"Закарпатський Оазис"}
                             comment={"Готель «Закарпатський оазис» розташований в Карпатах, менш ніж в 3 хвилинах ходьби від санаторію «Карпати», де надається широкий спектр лікувальних та оздоровчих процедур"}
                    />
                    <Preview imgURL={"../img/hotelPreviews/troyandaKarpat.jpg"}
                             href={"./hotel"}
                             name={"Троянда Карпат"}
                             comment={"Комплекс «Троянда Карпат» розташований в селищі Карпати, в 500 метрах від знаменитого замку Шенборнів. До послуг гостей спа-салон і оздоровчий центр з критим басейном, сауною і фітнес-центром."}
                    />
                  </MainPage>
                  <AppFooter/>
                </div>
              </Route>
              <Route path="/hotel">
                <div>
                  <HotelHeader hotelName={"Троянда Карпат"}/>
                  <Hotel hotelName={"Троянда Карпат"}/>
                  <AppFooter/>
                </div>
              </Route>
              <Route path="/place">
                <div>
                  <PlaceHeader backGroundImgURL={"./img/header-other.png"} placeName={"Село Карпати"} />
                  <MainPage>
                    <Place placeName={"Село Карпати"}/>
                  </MainPage>
                  <AppFooter/>
                </div>
              </Route>
              <Route path={"/test"}>
                <div>
                  <MainPage>
                    <h1>TEST</h1>
                  </MainPage>
                </div>
              </Route>
              <Route exact path="/">
                <div>
                  <AppHeader/>
                    <MainPage>
                        <Preview imgURL={"./img/header-other.png"} href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview imgURL={"./img/header-bg-image.png"} href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                        <Preview href={"./place"} comment={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. 105 SYMBOLS!"}/>
                    </MainPage>
                  <AppFooter/>
                </div>
              </Route>
            </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
