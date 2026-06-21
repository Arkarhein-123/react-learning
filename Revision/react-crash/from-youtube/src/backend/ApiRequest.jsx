export const apiRequest = async (url = "", optionObj = null, errMsg = "") => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw Error("Pls Reload the Page");
  } catch (err) {
    errMsg = err.message;
  } finally {
    console.log(errMsg);
  }
};
