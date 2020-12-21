export interface Especialidade {
    id?: number
    nome: string
}

export interface Medico {
    id?: number
    nome: string
}

export interface Agenda {
    id?: number
    dia: string
    horarios: String[]
}

export interface ConsultaPost {
    agenda_id: string
    horario: string
}

