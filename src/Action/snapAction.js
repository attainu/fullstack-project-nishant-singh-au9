export function snapShotUser() {
  return function (dispatch) {
    fetch("https://bankbergfinanceapi.herokuapp.com/api/users/userInfo", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": sessionStorage.getItem("ltk")
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(snapUser(data));
      });
  };
}

export function snapUser(data) {
  return {
    type: "SNAP_DATA",
    payload: data
  };
}
