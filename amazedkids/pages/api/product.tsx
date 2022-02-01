import prisma from "../../lib/prisma";

export default async function handler(req, res) {

  if (req.method == "GET") {
      res.status(200).json(await prisma.product.findMany());
  } else {

  }
}