import config from '../../config.json';

export function getApiPath() {
    let result = window.config.WREN_API_PATH;
    /*let result = null;  // default
  
    if(process.env.NODE_ENV === "development"){
      result = "https://localhost:1337";
    }
    else if(process.env.NODE_ENV === "production"){
      result = window.config.WREN_API_PATH;
    }*/

    return result;
}

export function getPureCloudImplicitGrantClientId() {
    return config.PURECLOUD_IMPLICIT_GRANT_CLIENTID;
}

export function getPureCloudImplicitGrantCallbackUrl() {
    return config.PURECLOUD_IMPLICIT_GRANT_CALLBACK_URL;
}

export function getAppOrigin() {
  return config.APP_ORIGIN;
}