# Task App

Small personal project to practice React, Redux, and styled-components concepts. 

## Big update 1/15 to 1/18

### General
- Consolidated some logic to reduce number of props
- Refactored code overall (in both logic, style, and components), mainly basic changes such as
  - Moving some handling of sizing from JS to CSS (ex. @media)
  - Combining props and removing irrevelant ones 
  - Removing unnecessary/repeated CSS properties 
- Implemented a rather basic responsive design based on the old code's design

### Calc
- Major adjustments to sizing and placements of the elements 

### Stopwatch
- No major changes

### Extra
- Added Credits.js

### Timer 
- Removed all the unnecessary ternary statements and combined similar components -> + Countdown.js, + EditTime.js, + Convert.js
- Fixed sizing issue of the menu for the preset buttons (Preset.js)
- Simplified a shared component (DisplayTime.js) by moving logic into EditTime.js, including simplifying some ternary statements
  - Passing arg to callback functions that return a component

### Todo 
- Moved some callback functions from NoteMenu.js to parent Todo.js, redefined them with useCallback hook
  - Actions moved to parent: clearList, createNote, deleteNote
- Replaced inefficient ternary that controlled number of notes displayed and memoized the notes (ToDo.js)
- Refactored Notemenu.js -> + NavArrows.js 
- Fixed issue where user could change to the editing input box in a list item despite being in delete mode (Input.js)


### Improvements to be made
- Add documentation 
- Simplify code
  - CSS ex. remove grid system for flex instead, handle @media queries, adjust so there's more consistentency 
  - React hooks, structure of components
  - Structure of redux state
- Allow the menu of notes to be displayed in big enough screens (Todo)
- If the history was open on smaller screen sizes and window was resized bigger, set the associated state false. When reverting back to the smaller menu, it's not automatically displayed. (similar to a useEffect hook in Menu.js) (Calc)
- Replace deprecated createStore to configureStore (App.js)



## Update 1/19
- Fixed some major display issues in Todo, Stopwatch, and Timer components
  - Todo - removed the menu when switching to the alternate display mode for bigger screens 
  - Stopwatch - adjusted some positionings for smaller screen (very basic changes based on the current code)
  - Timer - Fixed the Alert component's appearance and placement 

  ## Update 1/26
  - Updated error page


## Update 7/7
- Significants updates including bug fixes and removing redundancies 
- Timer - Fixed restart mechanism 
- Gradually shifting from hard-coded grid to react-awesome-styled-grid for more concise code 
- Reduce style props by merging into a style object, reduced significant amount of CSS 
- Fixed display issue for timing of laps in the Stopwatch section for smaller devices 


## Update 7/11
- Removed remaining old grid and replaced with react-awesome-styled-grid 
- Fixed hovering issues for the switches 
- Reworked design of small screens for to-do lists, replacing dropdown, used radix 
  - Added TabMenuStyle, TabMenu
- Fixed spacing issue for Todo in large screens when display all 
- Moved delete option and attached it to each note, allowing individual notes to be deleted when viewing all instead of the most recent
- Removed Notemenu.js
- Fixed input issue for Timer, does not remount & unmount for every input 
- Added clear option for calculator
- Consolidated and normalized grid and spacing between Calc/Todo, reducing CSS by 1/2 
- Consolidated similar styled components to remove redundancies -> StyledButtons
- Replaced custom Switch with Switch using radix 
- Actually fixed the timer issue
- Need to do 
  - Rework Redux store so there's an intermediate between notes and items, don't update note store if adding element
  - Replace dropdown in calc with Dropdown from radix 