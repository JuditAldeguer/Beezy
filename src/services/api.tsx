const callToApi = (searchWord: String, orderBy: String) => {
  return fetch(
    `//gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchWord}&orderBy=${orderBy}&apikey=7b58cabf2e243a9ff8b855ab582e1913`
  )
    .then((response) => response.json())
    .then((response) => {
      debugger;
      console.log(response);
      return response;
    });
};



const objectToExport = {
  callToApi: callToApi
};
export default objectToExport;
