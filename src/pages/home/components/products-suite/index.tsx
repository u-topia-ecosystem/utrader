const ProductSuite = () => {
  const products = getProducts()

  return (
    <div className="space-y-8">
      <h2 className="font-inter text-2xl font-bold text-text-color-100 md-3:text-4xl">Discover our products</h2>

      <div className="grid grid-cols-2 gap-16 max-md-7:grid-cols-1">
        <div className="grid gap-4">
          {products.map((product, index) => (
            <Product key={index} title={product.title} description={product.description} />
          ))}
        </div>

        <div className="rounded-md bg-primary-cta-color-60 max-md-7:hidden"></div>
      </div>

      <button className="rounded-md bg-primary-cta-color-60 px-8 py-3 font-open-sans text-sm font-semibold text-primary-cta-layer-color-60">
        Get started
      </button>
    </div>
  )
}

type ProductProps = {
  title: string
  description: string
}

const Product = ({ title, description }: ProductProps) => {
  return (
    <div className="space-y-4 border-l-4 border-primary-cta-color-60 px-4 py-2">
      <h3 className="font-open-sans text-xl font-semibold text-text-color-100">{title}</h3>
      <p className="font-open-sans text-base font-normal text-text-color-80">{description}</p>
    </div>
  )
}

const getProducts = () => {
  const products: ProductProps[] = [
    {
      title: "Copytrading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard dummy text ever since the stoneage.",
    },
    {
      title: "Trading bot",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard dummy text ever since the stoneage.",
    },
    {
      title: "Stake",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard dummy text ever since the stoneage.",
    },
    {
      title: "RWA",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. it has been the industry's standard dummy text ever since the stoneage.",
    },
  ]

  return products
}

export default ProductSuite
