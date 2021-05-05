import { Link } from 'react-router-dom'
import classes from './Resultspage.module.css'

const Resultspage = (props) => {
  const t3 = new Date()

  var d1 = (props.location.test2Props.time2 - props.location.test2Props.time1) / 1000

  var d2 = (t3 - props.location.test2Props.time2) / 1000
  return (
    <>
      <div className={classes.results}>
          Test1 completion time: <b>{d1}</b>s
          <br />
          <br />
          Test2 completion time: <b>{d2}</b>s
          <br />
          <br />
          <br />
          <br />
          <br />
          It took you <font color="blue"><b>{(d2 - d1).toFixed(3)}</b></font>s longer to complete Test2 than Test1!
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