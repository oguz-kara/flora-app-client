export function getErrorMessage(error) {
  if (error && error.name === 'AxiosError') {
    if (error.code === 'ERR_BAD_REQUEST') {
      const reqMessage = error.response.data.message;
      const message = reqMessage ? reqMessage : error.message;
      return message;
    }
  }
}
