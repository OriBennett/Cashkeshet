import { game1 } from "../thegame";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */

export async function GET(_request: Request) {
  game1.initGame();

  return new Response('Game initialized', {
      status: 200,
    });
  }
  