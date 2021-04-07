export function sendMoneyAction(amount) {
    return function (dispatch) {
      fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/sendmoney", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("ltk")
        },
        body: JSON.stringify(amount)
      })
        .then((res) => res.json())
        .then((data) => { 
          dispatch(Moneysend(data));
        });
    };
  }
  
  export function Moneysend(data) {
    return {
      type: "SEND_MONEY",
      payload: data
    };
  }