import { Link } from 'react-router-dom'
import classes from './Homepage.module.css'

const description = (
  <>
    <p>
      The Stroop effect is a psychological phenomena that describes
      the delay in reaction between congruent and incongruent stimuli.
      <br />
      <br />
      This webapp will demonstrate the Stroop effect by comparing the
      amount of time required to read out the color of words whose verbal
      color and visual color <b>match</b> to the amount of time required to read
      out the color of words whose verbal color and visual color <b>do not match</b>.
      <br />
      <br />
      For example,
      <font color=" red"><b> RED </b></font>
      should be read as &quot;red&quot;, but
      <font color=" blue"><b> RED </b></font>
      should be read as &quot;blue&quot;.
      <br />
      <br />
      The first test will have matching colors and words, and the second test will have mismatched colors and words.
      <br />
      <br />
      Click the &quot;get started&quot; button when you are ready and then click the &quot;next&quot; button when you are done with each test
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
