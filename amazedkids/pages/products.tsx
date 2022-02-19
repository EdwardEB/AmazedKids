import React, { useCallback, useState } from "react";
import Layout from "../components/Layout";

import ProcuctCards from "../components/products/productcard";
import ProductForm from "../components/products/productform";

import { GetStaticProps } from "next";
import prisma from "../lib/prisma";
import { Button } from "@mantine/core";
import { TiPlus } from "react-icons/ti";


export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.product.findMany({ where: { inactive: false } })
  return {
    props: { feed },
    revalidate: 60,
  }
}

function Product({ feed }) {
  console.log('feed', feed)
  const [request, setRequest] = useState<"insert" | "change" | "delete" | "select">("insert");
  const [open, setOpen] = useState(false);
  const [rid, setRid] = useState<number>(0);

  const insertRecord = useCallback(()=>{
    setRequest("insert");
    setOpen(true);
  },[])

  return (
    <Layout>
      <Button
        size='xs'
        variant="default"
        onClick={insertRecord}
        leftIcon={<TiPlus size={14} />}
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[7],
          border: "none",

        })}
        styles={{
          inner: { justifyContent: "flex-start" },
          rightIcon: { marginLeft: "auto" }
        }}
      >
        Add Product
      </Button>
      <ProcuctCards feed={feed} />
      <ProductForm
        request={request}
        open={open}
        closeForm={() => { setOpen(false) }}
        rid={rid}
      />
    </Layout>
  )
}

export default Product;