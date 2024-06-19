// types/types.ts

export interface Usuario {
  nombre: string;
  apellidos: string;
}

export interface Dispositivo {
  nombre: string;
}

export interface Ticket {
  id: number;
  descripcion: string;
  status: "Abierto" | "En proceso" | "Cerrado" | "Finalizado";
  idUsuario: number;
  idDispositivo: number;
  createdAt: string;
  updatedAt: string;
  Usuario?: Usuario; // Usuario es opcional porque puede venir anidado
  Dispositivo?: Dispositivo; // Dispositivo es opcional porque puede venir anidado
}
