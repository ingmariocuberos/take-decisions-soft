export const standardResponse = (res, msg, success = true, status = 200, data = {}) => {
  res.send({
    msg,
    success,
    status,
    data
  })
}