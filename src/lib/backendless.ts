import Backendless from "backendless";

const appId = import.meta.env.VITE_BACKENDLESS_APP_ID;
const apiKey = import.meta.env.VITE_BACKENDLESS_API_KEY;

Backendless.initApp(appId, apiKey);

export default Backendless;