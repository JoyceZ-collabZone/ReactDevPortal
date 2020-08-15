//common headers
const commonFetchRequestHeaders = {
  "Content-Type": "application/json",
  "Request-header-token": window.localStorage.getItem("token"),
};
export async function userSubmitSigninHandler(formUserInputData) {
  // submit handler is async, can use await and .then
  try {
    const response = await fetch("/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: commonFetchRequestHeaders,
      body: JSON.stringify(formUserInputData),
    });

    const extractedTokenFromResponse = response.headers.get(
      "Login-Response-Token-Header"
    ); // fetch api documentation
    console.log("response token", extractedTokenFromResponse);
    return extractedTokenFromResponse;
  } catch (error) {
    console.log("user login submit", error);
  }
}

export async function userRefreshUserListing() {
  // submit handler is async, can use await and .then
  try {
    const userListingResponse = await fetch("/user", {
      method: "GET",
      credentials: "same-origin",
    });
    return userListingResponse;
  } catch (error) {
    console.log("user login submit", error);
  }
}

export async function getAPIListing() {
  try {
    const getAPIMetadtaResponse = await fetch("/apimetadata", {
      method: "GET",
      credentials: "same-origin",
    });
    return await getAPIMetadtaResponse.json();
  } catch (error) {
    console.log("user login submit", error);
  }
}

// export async function getAPIListingById(id) {
//   try {
//     const getAPIMetadtaResponse = await fetch(`/apimetadata/${id}`, {
//       method: "GET",
//       credentials: "same-origin",
//     });
//     return await getAPIMetadtaResponse.json();
//   } catch (error) {
//     console.log("user login submit", error);
//   }
// }
// export async function getADR() {
//   try {
//     const getAPIMetadtaResponse = await fetch("/apimetadata", {
//       method: "GET",
//       credentials: "same-origin",
//     });
//     return await getAPIMetadtaResponse.json();
//   } catch (error) {
//     console.log("user login submit", error);
//   }
// }

export async function getADRs() {
  const result = await fetch("/ADRMetadata", {
    headers: commonFetchRequestHeaders,
  });
  const ADRResponse = await result.json();

  return ADRResponse;
}

export async function getADRById(id) {
  const result = await fetch("/ADRMetadata/" + id, {
    headers: commonFetchRequestHeaders,
  });
  const getADRByIdResponse = await result.json();

  return getADRByIdResponse;
}

export async function updateADRById(id, ADRDetails) {
  const result = await fetch(`/ADRMetadata/update/${id}`, {
    method: "PATCH",
    body: JSON.stringify(ADRDetails),
    headers: commonFetchRequestHeaders,
  });
  const editADRByIdResponse = await result.json();
  return editADRByIdResponse;
}

export async function addADRAPICall(ADRInputDetails) {
  const result = await fetch("/ADRMetadata/new", {
    method: "POST",
    body: JSON.stringify(ADRInputDetails),
    headers: commonFetchRequestHeaders,
  });
  const addADRResponse = await result.json();

  return addADRResponse;
}

export async function deleteADRAPICall(id) {
  const result = await fetch(`/ADRMetadata/delete/${id}`, {
    method: "DELETE",

    headers: commonFetchRequestHeaders,
  });
  const addADRResponse = await result.json();

  return addADRResponse;
}

export async function addDevAPICall(DevInputDetails) {
  const result = await fetch("/user/new", {
    method: "POST",
    body: JSON.stringify(DevInputDetails),
    headers: commonFetchRequestHeaders,
  });
  const addDevResponse = await result.json();

  return addDevResponse;
}
