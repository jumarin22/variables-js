function main() {
  // Practice Creating Variables

  // Create a variable that stores the numberOfCupsOfCoffee that you drink every day.
  const numberOfCupsOfCoffee = 0.5
  // Create a variable called fullName and set it equal to your full name.
  const fullName = 'Justin Marin'
  // Use console.log and your variables, numberOfCupsOfCoffee and fullName to output all three on one line.
  console.log(`${fullName} had ${numberOfCupsOfCoffee} cups of coffee today.`)
  // Create an variable that stores an object. Make the properties of the object fullName, luckyNumber , and favoriteMovies.
  // Where fullName is your full name, luckyNumber is a number value of your favorite number, and favoriteMovies is an array of strings of a few of your top movies.
  // NOTE: Try doing this using object literal: const aboutMe = { } and put the properties inside.
  const myObject = {
    fullName: 'Justin Marin',
    luckyNumber: 13,
    favoriteMovies: ['Pulp Fiction', 'Bad Boys II', 'Office Space'],
  }

  // Practice Getting Input From the User

  // Using window.prompt, Ask the user for their name and store it in a variable named userName.
  const userName = window.prompt('Please enter your name: ')
  // Use console.log to show a greeting to the user, using their name.
  console.log(`Greetings, ${userName}!`)

  // Converting String Input Into Numbers

  // Input two numbers from the user. Convert each resulting string from window.prompt to a float using parseFloat.
  // Save the first value in a variable named firstOperand and the second value in a variable named secondOperand.
  const firstOperand = parseFloat(window.prompt('Please enter a number: '))
  const secondOperand = parseFloat(
    window.prompt('Please enter another number: ')
  )

  // Doing Math

  // Add the operand variables from above and save the results in a variable named sum.
  const sum = firstOperand + secondOperand
  // Subtract the secondOperand variable from the firstOperand variable and save the results in a variable named difference.
  const difference = firstOperand - secondOperand
  // Multiply the operand variables and save the results in a variable named product.
  const product = firstOperand * secondOperand
  // Divide the firstOperand by the secondOperand and save the results in a variable named quotient.
  const quotient = firstOperand / secondOperand
  // Find the remainder when one operand is divided by the other and save the results in a variable named remainder.
  const remainder = firstOperand % secondOperand
  // Use console.log to present the user, in a meaningful way, each of the values for the sum, difference, quotient, product, and remainder variables.
  // (e.g. perhaps one of your outputs is similar to If you add 4 and 5 you get 9 if 4 and 5 were the input)
  console.log(`If you add ${firstOperand} and ${secondOperand} you get ${sum}`)
  console.log(
    `If you subtract ${secondOperand} from ${firstOperand} you get ${difference}`
  )
  console.log(
    `If you multiply ${firstOperand} and ${secondOperand} you get ${product}`
  )
  console.log(
    `If you divide ${firstOperand} by ${secondOperand} you get ${quotient}`
  )
  console.log(
    `The remainder of ${firstOperand} and ${secondOperand} is ${remainder}`
  )

  // Using Arrays

  // Use random.org to generate an array of random numbers. NOTE: That format isn't ready for JavaScript. In your editor, you will need to format the collection of numbers as a JavaScript array.
  // Place these numbers into a properly formatted array named numbers.
  const numbers = [14124, 10665, 13120, 12548, 38421]
  // Determine the following using one (or more) JavaScript for loops:
  //     Find the smallest number in the array and place the answer in a variable named smallest
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        var temp = 0
        temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  const smallest = numbers[0]
  // Alternatively:
  // let smallest = numbers.sort()[0]

  //     Find the largest number in the array and place the answer in a variable named largest
  const largest = numbers[numbers.length - 1]
  // Alternatively:
  // const largest = numbers.sort()[numbers.length - 1]

  //     Find the sum of all the numbers in the array and place the answer in a variable named arraySum
  let arraySum = 0
  for (let i = 0; i < numbers.length; i++) {
    arraySum += numbers[i]
  }
  //     Find the average of all the numbers in the array and place the answer in a variable named average
  const average = arraySum / numbers.length

  // Create an object called stats with the following properties
  //     In a property named smallest, put the value of the variable smallest
  //     In a property named largest, put the value of the variable largest
  //     In a property named sum, put the value of the variable arraySum
  //     In a property named average, put the value of the variable average
  const stats = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }

  // Adventure Mode
  // Find the sum of odd numbers in previous array
  let sumOfOdd = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 > 0) {
      sumOfOdd += numbers[i]
    }
  }

  // Find the count of even numbers in previous array
  let countOfEven = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      countOfEven++
    }
  }
}
document.addEventListener('DOMContentLoaded', main)
