export interface CreateRentalDTO {
  origem: string;       
  destino: string;      
  distancia: string;   
  tempo: string;    
}
export interface RentalResponseDTO {
  id: string;           
  origem: string;
  destino: string;
  distancia: string;
  tempo: string;
  createdAt: Date;     
}
export interface UpdateRentalDTO {
  origem?: string;
  destino?: string;
  distancia?: string;
  tempo?: string;
}
