import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import RecipeCard from '../components/RecipeCard'
import { getRecipeBySlug, recipes } from '../data/recipes'

export default function RecipeDetailPage() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return <div className="not-found"><span className="eyebrow">Errore 404</span><h1>Questa ricetta non è nel nostro quaderno.</h1><p>Potrebbe essere stata spostata o non essere più disponibile.</p><Link className="button button--dark" to="/ricette">Torna alle ricette</Link></div>
  }

  const relatedRecipes = recipes.filter((item) => item.slug !== recipe.slug).slice(0, 2)

  return (
    <>
      <section className="recipe-detail-hero">
        <div className="site-container">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/ricette">Ricette</Link><span>/</span><strong>{recipe.title}</strong></div>
          <div className="recipe-detail-hero__grid">
            <div className="recipe-detail-hero__content">
              <span className="eyebrow">{recipe.category}</span>
              <h1>{recipe.title}</h1>
              <p>{recipe.excerpt}</p>
              <div className="recipe-detail-meta" aria-label="Informazioni sulla ricetta">
                <div><span>Tempo</span><strong>{recipe.time}</strong></div>
                <div><span>Difficoltà</span><strong>{recipe.difficulty}</strong></div>
                <div><span>Porzioni</span><strong>{recipe.servings}</strong></div>
              </div>
            </div>
            <figure className="recipe-detail-hero__image">
              <img src={recipe.image} alt={recipe.title} />
              <figcaption>Ricetta TARTUFI&amp;TARTUFI</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="recipe-detail-body section">
        <div className="site-container recipe-detail-body__grid">
          <aside className="ingredients-card">
            <span className="eyebrow eyebrow--light">Mise en place</span>
            <h2>Ingredienti</h2>
            <p>Dosi per {recipe.servings.toLowerCase()}</p>
            <ul>{recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
            <Link className="button button--light button--full" to={recipe.productPath}>{recipe.productLabel} <Icon name="arrow" size={18} /></Link>
          </aside>

          <article className="recipe-method">
            <span className="eyebrow">Il procedimento</span>
            <h2>Pochi gesti,<br /><em>eseguiti con cura.</em></h2>
            <p className="recipe-method__intro">{recipe.introduction}</p>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                </li>
              ))}
            </ol>
            <div className="recipe-note"><span>Il consiglio della bottega</span><p>{recipe.note}</p></div>
          </article>
        </div>
      </section>

      <section className="related-recipes section section--cream">
        <div className="site-container">
          <div className="section-heading-row">
            <div className="section-title"><span className="eyebrow">Dal nostro quaderno</span><h2>Continua a cucinare</h2></div>
            <Link className="link-arrow desktop-link" to="/ricette">Tutte le ricette <Icon name="arrow" size={17} /></Link>
          </div>
          <div className="recipe-grid recipe-grid--related">
            {relatedRecipes.map((item, index) => <RecipeCard recipe={item} index={index} key={item.slug} />)}
          </div>
          <Link className="button button--outline mobile-cta" to="/ricette">Tutte le ricette</Link>
        </div>
      </section>
    </>
  )
}
