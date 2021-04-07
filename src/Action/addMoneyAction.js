export function addMoneyAction(amount) {
    return function (dispatch) {
      fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/addMoney", {
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
          dispatch(MoneyADD(data));
        });
    };
  }
  
  export function MoneyADD(data) {
    return {
      type: "ADD_MONEY",
      payload: data
    };
  }