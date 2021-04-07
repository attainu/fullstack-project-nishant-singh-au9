export function chequeAction() {
    return function (dispatch) {
      fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/orderchequebook", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("ltk")
        }
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(orderCheque(data));
        });
    };
  }
  
  export function orderCheque(data) {
    return {
      type: "CHEQUE_DATA",
      payload: data
    };
  }
  