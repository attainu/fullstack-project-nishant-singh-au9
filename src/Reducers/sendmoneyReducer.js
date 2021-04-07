export default function (state = null, action) {
    switch (action.type) {
      case "SEND_MONEY":
        return action.payload;
      default:
        return null;
    }
  }
  