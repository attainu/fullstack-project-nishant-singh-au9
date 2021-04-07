export function rechargeandbill(amount) {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/billandrecharges", {
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
        dispatch(payment(data));
      });
  };
}

export function payment(data) {
  return {
    type: "RECHARGEBILL_DATA",
    payload: data
  };
}