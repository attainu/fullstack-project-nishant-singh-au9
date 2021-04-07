export default function (state = null, action) {
    switch (action.type) {
      case "TRANSACTION_DATA":
        return action.payload;
      default:
        return null;
    }
  }
  