const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => {
        return (
          <Part key={part.name} name={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name}: {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const total = props.parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentPart) => {
      return accumulator + currentPart;
    }, 0);

  return <p>Number of exercises: {total}</p>;
};

export default App;
