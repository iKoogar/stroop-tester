import { Link } from 'react-router-dom'
import classes from './Homepage.module.css'

const description = (
  <>
    <p>
      <a href="https://github.com/iKoogar/stroop-tester">stroop-tester github</a>
      <br />
      <br />
 
      <hr />
      The Stroop effect is a psychological phenomenon that describes
      the delay in reaction between congruent and incongruent stimuli.
      <br />
      <br />
      This webapp will demonstrate the Stroop effect with a short series of tests that should show 
      the difference in reaction speeds depending on the congruency of words and colors.
      <br />
      <br />
      The first test will have matching colors and words.
      <br />
      The second test will have colors paired with random words.
      <br />
      The third test will have colors paired with random color words. 
      <br />
      <br />
      For example,
      <font color=" red"><b> RED </b></font>
      should be read as &quot;red&quot;,
      <font color=" yellow"><b> CAR </b></font>
      should be read as &quot;yellow&quot;, and
      <font color=" blue"><b> RED </b></font>
      should be read as &quot;blue&quot;.
      <br />
      <br />
      Click the &quot;get started&quot; button when you are ready and then click the &quot;next&quot; button when you are done with each test.
      <br />
      <br />
      Note: you may need to resize your browser window to properly see the tests.
    </p>
  </>
)

const Homepage = () => (

  <>
    {description}
    <Link to= {{
      pathname: "/test-1",
    }}> 
      <button type="button" className={classes.StartBtn}>
        get started
      </button>
    </Link>
  </>
)

export default Homepage
