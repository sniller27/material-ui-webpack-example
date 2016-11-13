import React from 'react'
import { Link } from 'react-router'
{/* this component server the purpose of simplifying the navbar elements by using spread operator (the three dots) */}
export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})