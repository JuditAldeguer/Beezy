const callToApi = (searchWord: String, orderBy: String) => {
  console.log(searchWord);
  const word = searchWord.replaceAll(" ", "+");  
  console.log(word);
  const url = `https://breakingbadapi.com/api/characters${
    word === "" ? "?limit=10" : `?name=${word}&limit=10`
  }`;
  console.log(url);
  
  debugger;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};


const objectToExport = {
  callToApi: callToApi
};
export default objectToExport;
