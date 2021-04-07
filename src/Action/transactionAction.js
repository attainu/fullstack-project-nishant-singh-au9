export function getTransaction(range) {
    return function (dispatch) {
      fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/getstatement", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("ltk")
        },
        body: JSON.stringify(range)
      })
        .then((res) => res.json())
        .then((data) => { 
          dispatch(transactions(data));
        });
    };
  }
  
  export function transactions(data) {
    return {
      type: "TRANSACTION_DATA",
      payload: data
    };
  }