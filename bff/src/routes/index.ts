import { FastifyPluginAsync } from "fastify";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services/product.service";

const product = new ProductController(new ProductService());

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {

  fastify.register(require('fastify-cors'), { 
    'Access-Control-Allow-Origin': '*'
  })

  fastify.get("/products", async function (request, reply) {
    return reply.send(await product.getProducts());
  });

  fastify.get("/wichlist", async function (request, reply) {
    return "Wich lista";
  });
};

export default root;
