import { connect } from "react-redux";
import { fetchNewTime } from '../../../redux/actionCreators';

// ...
const mapStateToProps = state => {
  return {
    currentTime: state.time.currentTime
  };
};

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

const Home = props => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime}</p>
      <button onClick={props.updateTime} style={{float: 'right', marginTop:'50px'}}>
        Update time
      </button>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
