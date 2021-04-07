import { BrowserRouter, Route } from "react-router-dom";
import Store from "./store";
import { Provider } from "react-redux";
import Register from "./Component/User/register";
import DevPage from "./Component/DevPage/DevPage";
import Home from "./Component/Home/home";
import Dashboard from "./Component/Dashboard/dashboard";
import Logout from "./Component/Logout/logout"
import DebitCard from "./Component/Cards/debitcard"
import AddMoney from "./Component/AddMoney/addmoney"
import SendMoney from "./Component/sendMoney/sendMoney"
import Transaction from "./Component/Transaction/getTransaction"
import Recharge from "./Component/RechargeandBill/recharge"
import Bill from "./Component/RechargeandBill/bill"
import UpdatePassword from "./Component/User/updatePassword"
import Cheque from "./Component/Cheque/cheque"

const Routing = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Route exact  path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/logout" component={Logout} />
        <Route path="/debitcard" component={DebitCard} />
        <Route path="/addmoney" component={AddMoney} />
        <Route path="/sendmoney" component={SendMoney} />
        <Route path="/transactions" component={Transaction} />
        <Route path="/mobilerecharge" component={Recharge} />
        <Route path="/paybill" component={Bill} />
        <Route path="/updatepassword" component={UpdatePassword} />
        <Route path="/cheque" component={Cheque} />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
