import { AppDataSource } from "../app-data-source.js"
import { AnamneseSchema } from "../schema/anamnese.js"

export class AtualizarAnamnese{
    async update(req, res) {
        try {
            const id = req.params?.id
            const body = req.body
            const anamneseRepository = AppDataSource.getRepository(AnamneseSchema)
            const result = await anamneseRepository.update( id,{...body})
            if(result?.affected === 1) {
                const anamnese = await anamneseRepository.find(id)
                return res.status(201).json(anamnese)
            }else {
                res.status(400).json({message: "Houve um erro ao atualizar"})
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}