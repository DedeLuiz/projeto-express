import { AppDataSource } from "../app-data-source.js"
import { PodologoSchema } from "../schema/podologo.js"

export class ListaPodologo{
    async list(req, res) {
        try {
            const podologoRepository = AppDataSource.getRepository(PodologoSchema)
            const podologos = await podologoRepository.find()
            return res.json(podologos)
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}