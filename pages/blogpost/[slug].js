import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';
import fs from 'fs';


function Slug(props) {
      const [blog,setBlog] = useState(props.myBlog); 

  return (
    <div className={styles.container}>
    <main className={styles.main}>
        <h2>{blog && blog.title} </h2>
        <hr/>
        <div>
           {blog && blog.content}
        </div>
    </main>
    </div>
  )
}

export async function getStaticPaths(){  
  let allb = await fs.promises.readdir('blogdata')
  allb = allb.map((item)=>{
    return {params:{slug:item.split(".")[0]}}
  })
return {
  paths : allb,
  fallback:true
 };
}
export async function getStaticProps(context){
  const { slug } = context.params;

   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

  return {
    props: { myBlog:JSON.parse(myBlog)},
  }
}

export default Slug;