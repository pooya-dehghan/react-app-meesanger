import { connect } from "react-redux";
import Header from "../component/messanger/header";
import PrimarySearchAppBar from '../component/shared/header2'
import List from '../component/messanger/list'
const mapStateToProps = (state) => ({
    name: state.name
})
const headercontainer = connect(mapStateToProps)(Header, PrimarySearchAppBar)
export default headercontainer
