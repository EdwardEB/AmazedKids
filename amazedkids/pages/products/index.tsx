import React from "react";
import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";
import { FixedSizeList } from 'react-window';
// import Layout from "../components/Layout"
// import Post, { PostProps } from "../components/Post"

export const getStaticProps: GetStaticProps = async () => {
  // const res = await prisma.$executeRaw`select count(1) from product`
  const feed = await prisma.product?.findMany({

    where: { rid_product: {gt : 5000} },
  });
  return { props: { feed } };
};

const Products : React.FC<Props> = (props) => {

  const Row = ({ index, style }) => (
    <div style={style}>
      <div className="post">{props.feed[index].productname}</div>
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={500}
      itemSize={50}
      itemCount={props.feed.length}
    >
      {Row}
    </FixedSizeList>
  )
}

export default React.memo(Products);