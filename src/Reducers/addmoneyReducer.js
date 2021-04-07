export default function (state = null, action) {
    switch (action.type) {
      case "ADD_MONEY":
        return action.payload;
      default:
        return null;
    }
  }
  