const callToApi = (searchWord: String, pageNum: String) => {
  const word = searchWord.replaceAll(" ", "+");
  const url = `https://breakingbadapi.com/api/characters${
    word === "" ? "?limit=10" : `?name=${word}&limit=10`
  }&offset=${pageNum}`;
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

const callToApi2 = () => {
  return fetch("https://breakingbadapi.com/api/characters")
    .then((response) => response.json())
    .then((response) => {
      return response.length;
    });
};


const objectToExport = {
  callToApi: callToApi,
  callToApi2: callToApi2,
};
export default objectToExport;
