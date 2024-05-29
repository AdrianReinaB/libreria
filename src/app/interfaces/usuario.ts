export interface Usuario {
    email: string
    libros: Libro[]
}

export interface Libro{
    titulo: string
    autor: string
    editorial: string
    isbn: string
    nPaginas: number
    anio: number
    genero: string
}
