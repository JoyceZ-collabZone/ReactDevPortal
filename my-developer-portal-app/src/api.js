//common headers
const commonFetchRequestHeaders = {
  "Content-Type": "application/json",
  requestTokenHeader: window.sessionStorage.getItem("token"),
};

export function updateHeaderOptions() {
  console.log("updating token for API requests"); //called whenever user login
  commonFetchRequestHeaders = {
    "Content-Type": "application/json",
    requestTokenHeader: window.sessionStorage.getItem("token"),
  };
}

export async function SignInCall(apiSignInRequest) {
  // submit handler is async, can use await and .then
  console.log(
    "logging signInRequest to node.js backend api ",
    apiSignInRequest
  );
  try {
    const response = await fetch("/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiSignInRequest),
    });
    console.log("logging fetch api node.js signInResponse ", response);
    console.log(
      "response token from login fetch api call",
      response.headers.get("responseToken")
    );
    return response.headers.get("responseToken");
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

export async function getAPIListingById(id) {
  try {
    const getAPIListingByIdRes = await fetch(`/apimetadata/${id}`, {
      method: "GET",
      credentials: "same-origin",
    });
    return await getAPIListingByIdRes.json();
  } catch (error) {
    console.log("user login submit", error);
  }
}
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

export async function call_getADRs() {
  const result = await fetch("/ADRMetadata", {
    headers: commonFetchRequestHeaders,
  });
  console.log("logging fetch api/getADRs reslut ", result);
  const ADRResponse = await result.json();
  console.log("logging fetch api/getADRs ADRResponse ", ADRResponse);
  return ADRResponse;
}

export async function call_getADRById(id) {
  const result = await fetch("/ADRMetadata/" + id, {
    headers: commonFetchRequestHeaders,
  });
  const getADRByIdResponse = await result.json();

  return getADRByIdResponse;
}

export async function call_updateADRById(id, ADRDetails) {
  const result = await fetch(`/ADRMetadata/update/${id}`, {
    method: "PATCH",
    body: JSON.stringify(ADRDetails),
    headers: commonFetchRequestHeaders,
  });
  const editADRByIdResponse = await result.json();
  return editADRByIdResponse;
}

export async function call_addADR(ADRInputDetails) {
  const result = await fetch("/ADRMetadata/new", {
    method: "POST",
    body: JSON.stringify(ADRInputDetails),
    headers: commonFetchRequestHeaders,
  });
  const addADRResponse = await result.json();

  return addADRResponse;
}

export async function call_deleteADR(id) {
  const result = await fetch(`/ADRMetadata/delete/${id}`, {
    method: "DELETE",

    headers: commonFetchRequestHeaders,
  });
  const deleteADRResponse = await result.json();

  return deleteADRResponse;
}

export async function createUserCall(userInput) {
  const result = await fetch("/user/new", {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: commonFetchRequestHeaders,
  });
  const createUserResponse = await result.json();
  return createUserResponse;
}

export async function createSwaggerAPICall(userInput) {
  const result = await fetch("/apimetadata/new", {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: commonFetchRequestHeaders,
  });
  const createSwaggerResponse = await result.json();
  return createSwaggerResponse;
}

export async function call_uploadFile(fileInput) {
  const result = await fetch("/apimetadata/upload", {
    method: "POST",
    body: JSON.stringify(fileInput),
    headers: commonFetchRequestHeaders,
  });
  const docUploadResponse = await result.json();
  console.log(
    "logging doc upload response in fetch api call",
    docUploadResponse
  );
  return docUploadResponse;
}
