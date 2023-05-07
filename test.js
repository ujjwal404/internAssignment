const sumValuesByDay = require('./sumValuesByDay')

function testSumValuesByDay() {
  const input1 = {
    '2022-05-01': 5,
    '2022-05-02': 10,
    '2022-05-03': 15,
    '2022-05-04': 20,
    '2022-05-05': 25,
    '2022-05-06': 30,
    '2022-05-07': 35,
  }
  const expected1 = {
    Monday: 10,
    Tuesday: 15,
    Wednesday: 20,
    Thursday: 25,
    Friday: 30,
    Saturday: 35,
    Sunday: 5,
  }
  const result1 = sumValuesByDay(input1)
  console.assert(
    JSON.stringify(result1) === JSON.stringify(expected1),
    'Test Case 1 Failed',
  )

  const input2 = {
    '2022-05-01': 5,
    '2022-05-02': 10,
    '2022-05-03': 15,
    '2022-05-06': 30,
    '2022-05-07': 35,
  }
  const expected2 = {
    Monday: 10,
    Tuesday: 15,
    Wednesday: 20,
    Thursday: 25,
    Friday: 30,
    Saturday: 35,
    Sunday: 5,
  }
  const result2 = sumValuesByDay(input2)
  console.assert(
    JSON.stringify(result2) === JSON.stringify(expected2),
    'Test Case 2 Failed',
  )

  const input3 = {
    '2022-05-01': 5,
    '2022-05-03': 15,
    '2022-05-04': 20,
    '2022-05-05': 25,
    '2022-05-07': 35,
  }
  const expected3 = {
    Monday: 10,
    Tuesday: 15,
    Wednesday: 20,
    Thursday: 25,
    Friday: 30,
    Saturday: 35,
    Sunday: 5,
  }
  const result3 = sumValuesByDay(input3)
  console.assert(
    JSON.stringify(result3) === JSON.stringify(expected3),
    'Test Case 3 Failed',
  )
}

testSumValuesByDay()
