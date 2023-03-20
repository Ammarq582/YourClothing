import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authenctication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/Shop/shop.component";
import { setCurrentUser } from "./store/user/user.actions";
import { createDocumentWithSignUp, onAuthStateChangedListener } from "./utils/firebase.utils";



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChangedListener((user) => {
        if(user) {
            createDocumentWithSignUp(user)
        }
        dispatch(setCurrentUser(user))
    })
})


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path="shop/*" element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
