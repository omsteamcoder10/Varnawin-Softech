import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border">
      <div className="relative h-48 sm:h-56 bg-secondary bg-opacity-20 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          <button className="bg-accent text-accent-foreground p-2 rounded-full hover:shadow-lg transition-all hover:scale-110">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
