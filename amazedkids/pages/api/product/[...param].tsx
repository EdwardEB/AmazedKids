import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
  const {param} = req.query;

  if (req.method == "GET") {
    if (param[0] > 0) {
      res.status(200).json(await prisma.product.findFirst({where : {rid_product : Number(param[0])}}));
    } else {
      res.status(200).json(await prisma.product.findMany());
    }
  } else {

  }
}