export default function (state = null, action) {
    switch (action.type) {
      case "RECHARGEBILL_DATA":
        return action.payload;
      default:
        return null;
    }
  }
  