export const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Products API",
      version: "0.1.0",
      description: "API para estudo de documentação de API",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Rafael Castro",
        url: "https://github.com/RafaelCastro1002",
        email: "rafael.castro1002@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["**/*.yml"],
};
