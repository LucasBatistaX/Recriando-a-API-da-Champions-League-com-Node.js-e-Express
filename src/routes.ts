import {Router} from "express"
import * as PlayerController from "./controllers/players-controller"
import * as ClubsController from "./controllers/clubs-controller"

//Chamei a função Router do Express (Gerenciador de rotas)
const router = Router()

//Criei a rota get onde o proprio gerenciador de rotas que direciona.
router.get("/players", PlayerController.getPlayer)
router.post("/players/", PlayerController.postPlayer)
router.delete("players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer )
router.get("/players/:id", PlayerController.getPlayerById)

router.get("/clubs", ClubsController.getClubs)


export default router