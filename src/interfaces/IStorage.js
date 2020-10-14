export interface IStorage {
  save: (key: string, data: any) => void,
  getItens: (key: string) => Promise<any[]>,
  editItem: (key: string) => void,
  deleteItem: (key: string) => void
}