import React,{ useEffect ,useState} from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import  fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
  const [blogs,setBlogs] = useState(props.allBlogs);
  const [count,setCount] = useState(2)

  const fetchData = async() =>{
      let d =await fetch(`http://localhost:3000/api/blog/?count=${count + 2}`)
      setCount(count + 2)
      let data = await d.json()
      setBlogs(data)
  }
  return (
    <div className={styles.container}>
    <main className = {styles.main}>
    <InfiniteScroll
    dataLength={blogs.length}
    next={fetchData}
    hasMore={props.allCount !== blogs.length}
    loader={<h4>Loading...</h4>}
    endMessage={
    <p style={{textAlign:'center'}}>
         <b>Yay! You have seen it all</b>
    </p>
    }
  >
     { blogs.map((blogitem)=>{
      return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h2 className={styles.blogsItemh3}>{blogitem.title}</h2></Link>
              <p className={styles.blogsItemp}>{blogitem.content.substr(0,140)}</p>
              <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
             })}
  </InfiniteScroll>
            </main>
          </div>
  )
}
export async function getStaticProps(context){
  let data = await  fs.promises.readdir('blogdata');
  let myfile;
  let allCount = data.length;
  let allBlogs = [];
  for(let index = 0; index< 2; index++){
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/'+ item),'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props : {allBlogs,allCount},
  }
}  

export default Blog;