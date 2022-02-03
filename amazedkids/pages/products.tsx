import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import prisma from "../lib/prisma";
import {FixedSizeList} from "react-window";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.product.findMany({where: { rid_product: {gt : 5000, lt : 7000}}})
  return {
    props: { feed },
    revalidate: 60,
  }
}

const Products = (props )=> {

  // useEffect(() => {
  //   fetch('api/product')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }, [])

  const Row = ({ index, style }) => (
    <div style={style}>
      <div className="post">{props.feed[index].productname}</div>
    </div>
  );

  return (
    <Layout>
      <FixedSizeList
        height={500}
        width={500}
        itemSize={50}
        itemCount={props.feed.length}
      >
        {Row}
      </FixedSizeList>
    </Layout>
  )
}

export default React.memo(Products);