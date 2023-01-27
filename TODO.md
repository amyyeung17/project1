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
