import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import prisma from "../lib/prisma";
import { FixedSizeList } from "react-window";
import { Card, Group, Text, Image, Badge, Button, Grid } from "@mantine/core";
import { EZDiv } from "../components/EZDiv";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.product.findMany({ where: { rid_product: { gt: 0, lt: 500 } } })
  return {
    props: { feed },
    revalidate: 60,
  }
}

const Products = (props) => {

  // useEffect(() => {
  //   fetch('api/product')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  // }, [])

  const Row = ({ index, style }) => (
    <div>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="boeti.JPG" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5 }}>
          <Text weight={500}>{props.feed[index].productname}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: "primary", lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </div>
  );

  return (
    <Layout>
      <FixedSizeList
        height={500}
        width={"100%"}
        itemSize={50}
        itemCount={props.feed.length}
        display={"flex"}
      >
        {Row}
      </FixedSizeList>
    </Layout>
  )
}

export default React.memo(Products);