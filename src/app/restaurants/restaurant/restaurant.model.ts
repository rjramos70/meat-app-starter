export interface Restaurant {

  id: string
  name: string
  category: string
  deliveryEstimate: string
  rating: number
  imagePath: string
  hours?: string	// propriedade opcional
  about?: string	// propriedade opcional
}
