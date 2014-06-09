var rw = require('rw')

exports.read = function (arg, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = null
  }

  rw.read((!arg || arg === '-')
    ? '/dev/stdin'
    : arg, encoding, callback)
}

exports.write = function (arg, encoding, callback) {
  if (typeof encoding === 'function') {
    callback = encoding
    encoding = null
  }

  rw.write((!arg || arg === '-')
    ? '/dev/stdout'
    : arg, encoding, callback)
}

exports.readSync = function (arg, encoding, which) {
  return rw.readSync((!arg || arg === '-')
    ? '/dev/stdin'
    : arg, encoding)
}

exports.writeSync = function (arg, encoding) {
  return rw.writeSync((!arg || arg === '-')
    ? '/dev/stdout'
    : arg, encoding)
}
