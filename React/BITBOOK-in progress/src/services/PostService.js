const END_POINT = 'http://bitbookapi.azurewebsites.net/api/TextPosts'

const createPost = (data) => {
  return fetch(END_POINT, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "key": 'bitbookdev',
      "sessionId": '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE',
    },
    body: JSON.stringify(data)
  })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
}

export { createPost }