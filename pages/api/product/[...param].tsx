import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
  const {param} = req.query;

  if (param[0] > 0) {
    if (req.method == "GET") {
      res.status(200).json(await prisma.product.findFirst({where : {rid_product : Number(param[0])}}));
    } else if (req.method == "POST") {
      res.status(200).json(await prisma.product.update(
        {
          where : {rid_product : Number(param[0])},
          data : {...req.body}
        }
      ))
    } else if (req.method == "DELETE") {
      res.status(200).json(await prisma.product.delete(
        {
          where : {rid_product : Number(param[0])}
        }
      ))
    }
  } else {
    res.status(200).json(await prisma.product.findMany());
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb' // Set desired value here
    }
  }
}