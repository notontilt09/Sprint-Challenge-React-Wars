# Answers

## 1.  What is React JS and what problems does it try and solve?
### React JS is a javscript library that attempts to solve the issues of rendering large amounts of constantly changing data to the user without sacrificing performance.  Without React, the entire DOM would need to be re-renderded every time any piece of data changed.
    
### With a massive site like Facebook (for which React was created), this would mean countless number of renders and the site would likely not be able to handle display the changes seamlessly.

### Instead, React handles changes to data by updating the Virtual DOM which in turn only re-renders those pieces of UI which have had their data altered.

## 2.  What does it mean to _think_ in react?
### Thinking in react is simply destructuring websites/applications in component based layout.  One can then determine the high level class components in which the data (state) will live, and the lower level functional components which are simply passed the data via props and re-rendered upon a change in state.

## 3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
### A Class/Stateful component holds state and extends the main component of React by calling (newComponent) extends React.component.  Usually all of our handlers and functionality will live inside of Class components and the data will be passed down to the children (functional components) via props.  Functional/Presentational components do not actually store any of the application data, they simply render UI to the screen using the data passed down from Class/Stateful components.

## 4.  Describe state.
## State is the data of the application.  It is most similar to the model part of MVC programming paradigms. Ideally, state lives at the topmost parent component of an application and is passed down to the child components via props.  It is usually brought in via an API or hard coded, and user interactions will mostly be updating state throughout the application.

## 5.  Describe props.
## Props are short for properties and they are simply the data that child components use to gain access to the data (or state) or their parent components.  Since the state live in these parent components, they can be passed down to the children via props and then accessed.  This solves the issue of having our data live in multiple places in our applications.
