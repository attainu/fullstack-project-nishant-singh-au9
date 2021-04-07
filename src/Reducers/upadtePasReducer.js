export default function (state = null, action) {
    switch (action.type) {
      case "UPDATE_PASSWORD":
        return action.payload;
      default:
        return null;
    }
  }
  