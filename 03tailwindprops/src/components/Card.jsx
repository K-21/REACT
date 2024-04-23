import React from 'react'

function card({username,post,src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600"}) 
{
  // i.e in this username and post are default value if its not coming from app.jsx
  // in this props come from the app.jsx file which will be defines
  // also username and post can be define  by alternative method 
  //console.log(props); in this props are username and post 
  //instead of props.username and props.post we use just username and post
  return (
    // in this src of the image can also be change by default or from the app.jsx the value is coming
    // 1st prefence given to value of app.jsx if not assigned it take default value given in props 
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={src} alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                      <p className="text-lg font-medium">
                                  “Tailwind CSS is the only framework that I've seen scale
                                  on large teams. It’s easy to customize, adapts to any design,
                                  and the build size is tiny.”
                      </p>
            </blockquote>
           <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                {/* can call as ==>>  {props.username} or {props.post}*/}
                  {username}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  {post}
                </div>
          </figcaption>
       </div>
  </figure>
  )
}

export default card
