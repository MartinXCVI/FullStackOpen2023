
const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => <div>{parts.map(part => <Part key={part.id} part={part} />)}</div>

const Header = ({ heading }) => <h1>{heading}</h1>

const Total = ({ parts }) =>
<p>
  <strong>
    Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
  </strong>
</p>

const Course = ({ course }) => (
  <>
    <h1>Web Development Curriculum</h1>
    {course.map(course => 
    <div>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )}
  </>
)

export default Course