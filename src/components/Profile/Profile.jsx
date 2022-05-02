import React from 'react'
import classes from './Profile.module.css'
import Posts from './Posts-section/Posts.jsx'

function Profile() {
  return (
    <div className={classes.content}>
        <img src="https://static.scientificamerican.com/sciam/cache/file/4BC816FB-F21A-49C2-A9CB4D85FD64EF69_source.jpg" />

          <div className={classes.userInformation}>

          </div>

      <Posts />
    
      </div>
  )
}

export default Profile