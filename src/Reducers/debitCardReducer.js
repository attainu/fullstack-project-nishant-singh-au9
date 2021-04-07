export default function (state = null, action) {
    switch (action.type) {
      case "DEBITCARD_DATA":
        return action.payload;
      default:
        return null;
    }
  }
  