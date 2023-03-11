const Header = (props) => {
  const { course } = props;
  const courseName = course.name;

  return <h1>{courseName}</h1>;
};

const Part = (props) => {
  const { part } = props;
  const { name, exercises } = part;

  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = (props) => {
  const { course } = props;
  const { name, parts } = course;
  const [part1, part2, part3] = parts;

  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
};

const Total = (props) => {
  const { course } = props;
  const { name, parts } = course;

  const sum = parts.reduce((sum, currentPart) => sum + currentPart.exercises, 0);

  return <p>Number of exercises {sum}</p>;
};

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
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
