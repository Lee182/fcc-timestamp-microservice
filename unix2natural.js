const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
module.exports = function(unix){
  if (isNaN(unix) === false) {
    if (typeof unix === 'string') {
      unix = Number(unix)
    }
    var d = new Date(unix)
    return months[d.getUTCMonth()]+' '+d.getUTCDate()+', '+ d.getUTCFullYear()
  }
  return null
}
