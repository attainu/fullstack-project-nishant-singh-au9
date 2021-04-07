export default function (state = null, action) {
    switch (action.type) {
      case "CHEQUE_DATA":
        return action.payload;
      default:
        return null;
    }
  }
  