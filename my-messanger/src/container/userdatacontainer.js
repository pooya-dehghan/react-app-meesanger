import { connect } from "react-redux";
import Explored from "../component/messanger/explored";
const mapStateToProps = (state) => {
    return {
    user: state.exploredUsers,
    }
}
const UserdataContainer = connect(mapStateToProps)(Explored)
export default UserdataContainer
