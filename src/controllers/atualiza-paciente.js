import { AppDataSource } from "../app-data-source.js"
import { PacienteSchema } from "../schema/paciente.js"

export class AtualizarPaciente{
    async update(req, res) {
        try {
            const id = req.params?.id
            const body = req.body
            const pacienteRepository = AppDataSource.getRepository(PacienteSchema)
            const result = await pacienteRepository.update( id,{...body})
            if(result?.affected === 1) {
                const paciente = await pacienteRepository.find(id)
                return res.status(201).json(paciente)
            }else {
                res.status(400).json({message: "Houve um erro ao atualizar"})
            }
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}