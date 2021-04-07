export function getDebitCard() {
    return function (dispatch) {
      fetch("https://bankbergfinanceapi.herokuapp.com/api/cards/getdebitcard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("ltk")
        }
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(debitCard(data));
        });
    };
  }
  
  export function debitCard(data) {
    return {
      type: "DEBITCARD_DATA",
      payload: data
    };
  }