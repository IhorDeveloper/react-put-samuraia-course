import React from 'react'
import classes from './Post.module.css'

function Post(props) {
  return (
    <div className={classes.post}>
        <div className={classes.image}>
            <img src="https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg" />

        </div>


        <h1 className={classes.title}>{props.content}</h1>
    </div>
  )
}

export default Post