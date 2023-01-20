const todoInfo = [
  `To see an overflowed title, hover over the note's 
    icon in the note menu.
  `,
  `To see an overflowed note item, hover over the item itself.
  `,
  `For large enough windows, there is an option to change how the
    notes are displayed.
  `
]

const timerInfo = [
  'Timer can only be set to a time less than 24 hours',
  `Stopping the timer in a middle of countdown will
    set the timer to the remaining time in the countdown
  `,
  `Timer values can inputted in multiple ways with the toggle button.
  `,
  `With the input fields, values greater than what is the unit of 
    time defined will automatically be converted. 
    (ex. 90 s becomes 1 min & 30 s)
  `
]

const stopwatchInfo = [
  `Stopwatch time can be paused and will resume starting from 
    when it was last paused.
  `
]

const calcInfo = [
  'Negative values can be defined using the subtraction sign',
  `Selecting a past calculation will replace current input`,
  `To see an overflowed past calcuation, hover over the calculation's
    icon in the past calculation menu.
  `,
  `For smaller windows, there is an option to change how the
    display of the past calculations.
  `,
  `Values can be typed. Operators, with the exception of = and C, 
    can be entered with their respective keys.
  `,
  `= is designated as the Enter key.`,
  `C (delete) is designated as the Backspace or return key.`
]

const creditsInfo = [
  'Github:',
  'Contact: amyyeung17@gmail.com'
]

export default getInfo = ({current}) => {
  switch(current) {
    case 'Todo':
      return todoInfo
    case 'Timer':
      return timerInfo
    case 'Stopwatch':
      return stopwatchInfo
    case 'Calculator':
      return calcInfo
    case 'Credits':
      return creditsInfo
    default:
      return []
  }
}