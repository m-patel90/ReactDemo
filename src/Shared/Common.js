export function SearchParam(params, name) {
    if ([undefined, null, ""].includes(params)) return "";
    let paramArray = params.split('&');
    let value = '';
    paramArray.forEach((k, i) => {
        if (k.split("=")[0] === name) {
            value = k.split("=")[1]
        }
    });
    return value;
  }