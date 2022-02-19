import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  console.log(req, res)
  if (req.method == "GET") {
      res.status(200).json(await prisma.product.findMany());
  } else if (req.method == "POST") {
    res.status(200).json(await prisma.product.create({data : req.body}))
  } else {

  }
}