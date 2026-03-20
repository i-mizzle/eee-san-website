const API = "https://ekoejembiekosan.com/new-sample/wp-json/wp/v2"

type GetPostsOptions = {
  categorySlug?: string
  embed?: boolean
  perPage?: number
}

async function getCategoryIdBySlug(slug: string) {
  const res = await fetch(`${API}/categories?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error("Failed to fetch category")

  const categories = await res.json()
  return categories[0]?.id as number | undefined
}

export async function getPosts(options: GetPostsOptions = {}) {
  const { categorySlug, embed = false, perPage = 100 } = options
  const params = new URLSearchParams({ per_page: String(perPage) })

  if (embed) {
    params.set("_embed", "")
  }

  if (categorySlug) {
    const categoryId = await getCategoryIdBySlug(categorySlug)

    if (!categoryId) {
      return []
    }

    params.set("categories", String(categoryId))
  }

  const res = await fetch(`${API}/posts?${params.toString()}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    console.error(`Failed to fetch posts: ${res.status} ${res.statusText} — ${res.url}`)
    return []
  }

  return res.json()
}

export async function getPostBySlug(slug: string) {
    const res = await fetch(`${API}/posts?slug=${slug}&_embed`, {
        next: { revalidate: 3600 }
    })

    
    if (!res.ok) throw new Error("Failed to fetch post")
    
    const posts = await res.json()
    // console.log('the post ---> ---> ', posts)

    return posts[0]
}


/**
 * Fetch related posts based on category IDs
 * @param categoryIds Array of category IDs
 * @param excludePostId The current post ID to exclude
 * @param limit Number of posts to fetch
 */
export async function getRelatedPosts(
  categoryIds: number[],
  excludePostId: number,
  limit = 4
) {
  if (!categoryIds?.length) return []

  const categoriesParam = categoryIds.join(",")
  const res = await fetch(
    `${API}/posts?categories=${categoriesParam}&exclude=${excludePostId}&per_page=${limit}&_embed&_orderby=date&_order=desc`,
    {
      next: { revalidate: 3600 } // cache for 1 hour
    }
  )

  if (!res.ok) throw new Error("Failed to fetch related posts")

  return res.json()
}