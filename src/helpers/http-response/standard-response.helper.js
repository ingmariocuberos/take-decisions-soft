export const standardResponse = (msg, success = true, status = 200, data = {}) =>{
  return {
    msg,
    success,
    status,
    data
  }
}