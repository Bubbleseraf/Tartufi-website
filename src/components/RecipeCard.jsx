import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function RecipeCard({ recipe, index = 0 }) {
  return (
    <article className="recipe-card">
      <Link className="recipe-card__link" to={`/ricette/${recipe.slug}`} aria-label={`Leggi la ricetta: ${recipe.title}`}>
        <div className="recipe-card__media">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <p>{recipe.time} · {recipe.difficulty}</p>
        <h2>{recipe.title}</h2>
        <span className="link-arrow">Leggi la ricetta <Icon name="arrow" size={17} /></span>
      </Link>
    </article>
  )
}
