function sumValuesByDay(D) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const result = {}

  for (let i = 0; i < 7; i++) {
    result[days[i]] = 0
  }

  for (let date in D) {
    const day = new Date(date).getDay()
    result[days[day]] += D[date]
  }

  let prev = 0
  for (let i = 0; i < 7; i++) {
    if (result[days[i]] === 0) {
      let j = i + 1
      while (j < 7 && result[days[j]] === 0) {
        j++
      }
      if (j < 7) {
        const next = result[days[j]]

        let diff = next - prev

        const increment = diff / (j - i + 1)
        for (let k = i; k < j; k++) {
          result[days[k]] = prev + increment
          prev = result[days[k]]
        }
      } else {
        result[days[i]] = prev
      }
    } else {
      prev = result[days[i]]
    }
  }

  const sortedKeys = Object.keys(result).sort((a, b) => {
    if (a === 'Sunday') {
      return 1
    }
    if (b === 'Sunday') {
      return -1
    } else {
      return days.indexOf(a) - days.indexOf(b)
    }
  })

  const returnResult = {}
  for (let i = 0; i < sortedKeys.length; i++) {
    const key = sortedKeys[i]
    returnResult[key] = result[key]
  }

  return returnResult
}

D = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4,
}
let ans = sumValuesByDay(D)
console.log(ans)

module.exports = sumValuesByDay
