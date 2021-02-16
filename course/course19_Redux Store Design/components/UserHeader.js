import React from 'react'
import { connect } from 'react-redux'
import { fetchUser, fetchUserByMemoize } from '../actions'
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUserByMemoize(this.props.userId)
  }
  render() {
    if(!this.props.user) return null
    return (
      <div className="header">{this.props.user.name}</div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.userId)
  }
}
export default connect(mapStateToProps, { fetchUser, fetchUserByMemoize })(UserHeader)