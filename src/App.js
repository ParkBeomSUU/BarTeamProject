import React, { Component, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import MenuShow from "./MenuContents/MenuShow";
import AdminPage from "./AdminContent/AdminPage";
import NotFound from "./AdminContent/NotFound";
import Login from "./containers/Auth/Login";
import JwtExpired from "./AdminContent/JwtExpired";
import KakaoRegister from "./containers/Auth/KakaoRegister";
const App = () => {
    const [forHyenoh, setForHyenoh] = useState("");
    const [ reciptBody, setReciptBody ] = useState({})


    // menu에서 admin으로 바로 받기 (테이블번호 받기는 아직임)
    useEffect(() => {
        const oldOneFromStorage = JSON.parse(localStorage.getItem("forHyenoh"));

        if(oldOneFromStorage === null){

            if(forHyenoh)
                window.localStorage.setItem("forHyenoh", JSON.stringify({bill: forHyenoh.bill, volume: forHyenoh.volume, totalPrice: forHyenoh.totalPrice }));
            return;
        }else{
            if(!forHyenoh)
                return
        }
        // const totalPrice = oldOneFromStorage.totalPrice + forHyenoh.totalPrice;

        let tempVolume = {}
        let tempBill = {}
        let totalPrice = forHyenoh.totalPrice

        if(oldOneFromStorage){
            Object.keys(oldOneFromStorage.volume).forEach((menu, index) => {
                tempVolume[menu] =  oldOneFromStorage.volume[menu] + forHyenoh.volume[menu]

                if(oldOneFromStorage.bill[menu] > 0 && !forHyenoh.bill[menu]){
                    tempBill[menu] = oldOneFromStorage.bill[menu]
                }else if(forHyenoh.bill[menu] > 0 && !oldOneFromStorage.bill[menu]){
                    tempBill[menu] = forHyenoh.bill[menu]
                }else if(forHyenoh.bill[menu] > 0 && oldOneFromStorage.bill[menu] > 0){
                    tempBill[menu] = oldOneFromStorage.bill[menu] + forHyenoh.bill[menu]
                }
            })
            totalPrice = oldOneFromStorage.totalPrice + forHyenoh.totalPrice;
        }

        if (forHyenoh && !oldOneFromStorage) {
            window.localStorage.setItem("forHyenoh", JSON.stringify({bill: forHyenoh.bill, volume: forHyenoh.volume, totalPrice}));

            setReciptBody({bill: forHyenoh.bill, volume: forHyenoh.volume, totalPrice})
        }else if(forHyenoh && oldOneFromStorage){
            window.localStorage.setItem("forHyenoh", JSON.stringify({bill: tempBill, volume: tempVolume, totalPrice}));
            setReciptBody({bill: tempBill, volume: tempVolume, totalPrice})
        }
    }, [forHyenoh]);
    return (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/auth/login" component={() => <Login />} />
            <Route path="/kakao/login" component={()=><KakaoRegister/>}/>
            <Route
                exact
                path="/menu"
                component={() => <MenuShow setForHyenoh={setForHyenoh} forHyenoh={forHyenoh} reciptBody={reciptBody} />}
            />
            <Route exact path="/" component={() => <Home />} />
            {/* {userID ==="admin" &&  */}
            <Route
                exact
                path="/Admin"
                component={() => <AdminPage forHyenoh={forHyenoh} />}
            />
            <Route path="/jwtexpired" component={JwtExpired} />

            <Route path="/*" component={() => <NotFound />} />
        </Switch>
    );
};

export default App;