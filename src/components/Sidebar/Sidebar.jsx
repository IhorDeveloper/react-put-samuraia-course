import React from 'react'
import classes from './Sidebar.module.css'

function Sidebar() {
  return (
    <nav className={classes.sidebar}>
    <div className={classes.sidebarLink}>
      <a>Profile</a>
    </div>
    <div className={classes.sidebarLink}>
      <a>Messages</a>
    </div>
    <div className={classes.sidebarLink}>
      <a>News</a>
    </div>
    <div className={classes.sidebarLink}>
      <a>Music</a>
    </div>
    <hr className={classes.sidebarLine}></hr>
    <div className={classes.sidebarLinkSettings}>
      <a>Settings</a>
    </div>
  </nav>
  )
}

export default Sidebar