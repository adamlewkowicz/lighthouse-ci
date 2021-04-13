'use strict'

module.exports = change

function change(from, to, places, fmt) {
  if ('boolean' === typeof places) fmt = places, places = 2

  places = 'number' === typeof places
    ? places
    : 2

  from = +from
  to = +to
  if (from !== from || to !== to)
    return 0

  if (from === 0) {
    if (to) return Infinity
    if (fmt) {
      return '0.00%'
    }
    return 0
  }
  var o = ((to - from) / from)
  if (fmt) {
    o = o * 100
    o = o.toFixed(places)
    return o + '%'
  }
  return +o
}

change.format = function(from, to, places) {
  return change(from, to, places, true)
}
