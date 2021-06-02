import { Link } from 'react-router-dom'
import classes from './Resultspage.module.css'

const Resultspage = (props) => {
  const t4 = new Date()

  var d1 = (props.location.test3Props.time2 - props.location.test3Props.time1) / 1000

  var d2 = (props.location.test3Props.time3 - props.location.test3Props.time2) / 1000

  var d3 = (t4 - props.location.test3Props.time3) / 1000

  return (
    <>
      <div className={classes.results}>
          Test1 completion time: <b>{d1}</b>s
          <br />
          <br />
          Test2 completion time: <b>{d2}</b>s
          <br />
          <br />
          Test3 completion time: <b>{d3}</b>s
          <br />
          <br />
          <br />
          It took you <font color="blue"><b>{(d2 - d1).toFixed(3)}</b></font>s longer to complete Test2 than Test1!
          <br />
          <br />
          It took you <font color="blue"><b>{(d3 - d2).toFixed(3)}</b></font>s longer to complete Test3 than Test2!
          <br />
          <br />
          It took you <font color="blue"><b>{(d3 - d1).toFixed(3)}</b></font>s longer to complete Test3 than Test1!

      </div>
      <Link to= {{
        pathname: "/",
      }}> 
        <button type="button" className={classes.StartBtn}>
          back
        </button>
      </Link>
    </>
  )
}

export default Resultspage