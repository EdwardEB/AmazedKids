import React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
// import Layout from "../components/Layout"
// import Post, { PostProps } from "../components/Post"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.products.findMany({
    // where: { productname: "test2" },
  });
  return { props: { feed } };
};

const Products : React.FC<Props> = (props) => {
  console.log(props)
  return (
    <>
      {props.feed.map((post) => (
        <div key={post.id} className="post">{post.productname}</div>
      ))}
    </>
  )
}

export default React.memo(Products);