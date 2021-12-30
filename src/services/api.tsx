const callToApi = (searchWord: String, orderBy: String) => {
  debugger;
  console.log(searchWord);
  const word = searchWord.replaceAll(" ", "");  
  console.log(word);
  return fetch(
    `//www.swapi.tech/api/people/${
      word === ""  ? "" : `?name=${searchWord}`
    }`
  )
    .then((response) => response.json())
    .then((response) => {
      debugger;
      console.log(word === "" ? response.results : response.result);
      return word === "" ? response.results : response.result;
    });
};



const objectToExport = {
  callToApi: callToApi
};
export default objectToExport;
