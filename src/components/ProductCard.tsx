import { Link } from 'react-router-dom'
import Button from './Button'

const ProductCard = ({ id, category, title, description, color, image }) => {
    return (
        <div className='w-96 rounded-2xl overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
            <img src={image} alt={title + " Image"} className='h-48 w-full' />
            <div className='p-4'>
                <h3 className='font-bold'>{title}</h3>
                <p className='min-h-10'>{description}</p>
                <Link to={`/product/${category}/${id}`}>
                    <Button className='font-bold text-xs py-0 px-8 mt-2 hover:opacity-80' style={{ backgroundColor: color }}>
                        More Info
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
