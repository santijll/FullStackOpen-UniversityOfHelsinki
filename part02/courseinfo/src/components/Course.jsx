/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={parts[index]} />
      ))}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
export default Course;
