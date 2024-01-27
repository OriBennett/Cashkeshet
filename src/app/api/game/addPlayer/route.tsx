import { game1 } from "../thegame";

/**
 * @swagger
 * /api/game/addPlayer:
 *   post:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST(_request: Request) {
  let player = game1.addPlayer("");
  
  return new Response(`Player ${player.name}`, {
    status: 200,
    });
  }