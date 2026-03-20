import Image from "next/image"
import Link from "next/link"
import { getPosts, getPostBySlug } from "@/lib/wordpress"
import { Suspense } from "react"
import styles from "./postModule.module.css"
// import RelatedPosts from "@/app/components/partials/RelatedPosts"
// import { OG_IMAGE_PATH } from "@/lib/seo"
import InlinePreloader from "@/components/elements/InlinePreloader"
import moment from "moment"

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  const image =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  return {
    title: `${post.title.rendered}`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
    openGraph: {
      images: image ? [image] : []
      // images: image
    }
  }
}

// Helper to calculate reading time
function getReadingTime(content: string) {
  const text = content.replace(/<[^>]*>/g, "") // strip HTML
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200)) // 200 wpm
  return `${minutes} mins read`
}

export default async function PostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Post not found</h1>
          <p className="text-gray-600 mt-2">The post you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
  const categories = post?._embedded?.["wp:term"]?.[0] || []

  // Pull author separately
  const author = post?._embedded?.author?.[0]
  console.log('post author =====>', author)
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
  const readingTime = getReadingTime(post.content.rendered)

  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center h-[80vh]">
          <InlinePreloader />
        </div>
      }
    >
      <article className="max-w-6xl mx-auto px-8 pt-30">     

        {/* Categories */}
        {/* {categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 mx-auto xl:w-max">
            {categories.map((category: any) => (
              <Link
                key={category.id}
                href={{
                  pathname: "/blueprint",
                  query: { category: category.slug }
                }}
                className="px-3 py-1 xl:px-5 xl:py-2.5 text-xs xl:text-[16px] bg-[#03BEFA33] text-black dark:text-white rounded-full transition hover:bg-[#03BEFA55]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        )} */}

        {/* Title */}
         <h2
          className="text-eee-black text-xl transition duration-200 hover:text-eee-red font-semibold mt-6 mb-10"
              dangerouslySetInnerHTML={{
              __html: post.title.rendered
              }}
          />
        {/* Post meta: author, date, reading time */}
        {/* <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm mt-2 mb-6 items-center">
            {author && (
              <span className="text-eee-black">{author.name}</span>
            )}
            <span className="flex items-center gap-x-2">
                <Image src={`/icons/stopclock.svg`} width={20} height={20} alt="" />
                {readingTime}</span>
        </div> */}

        {/* Hero image */}
        {image && (
          <div className="relative w-full h-75 xl:h-110 rounded overflow-hidden my-10">
            <Image
              src={image}
              alt={post.title.rendered}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        )}

        {/* Post content */}
        {/* <div
          className={`${styles.postContent} dark:text-gray-200!`}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        /> */}

        <div className={`${styles.postContent} xl:flex items-start gap-x-6 pb-50`}>
          <div className="w-full xl:w-2/12 xl:pt-15">
            <span className="text-[13px] text-gray-400 block mb-1">Written by:</span>
            <span className="font-medium text-eee-dark-gray text-[15px] block mb-1">
                {post._embedded?.author?.map((auth: any, authIndex: number) => (
                <span key={authIndex}>{auth.name}</span>
                ))}
            </span>
            {/* {author && (
            <div className="flex items-center gap-2 mt-15">
                {author.avatar_urls?.["48"] && (
                  <img
                      src={author.avatar_urls["48"]}
                      alt={author.name}
                      className="w-10 h-10 border-2 border-eee-light-gray rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold text-eee-black">{author.name}</p>
                </div>
            </div>
            )} */}
            <p className="text-[13px] text-[#737373]">{moment(post.date).format(`D MMMM YYYY`)}</p>

            <p className="text-[13px] text-[#737373]">
                {/* <Image src={`/icons/stopclock.svg`} width={20} height={20} alt="" /> */}
                {readingTime}</p>

              
          </div>
          
          <div className="w-full xl:w-10/12 text-eee-dark-gray"
          dangerouslySetInnerHTML={{
              __html: post.content.rendered
          }}
          />
        </div>

        
      </article>

      {/* Related posts */}
      {/* {post && post.categories?.length > 0 && (
        <RelatedPosts categories={post.categories} currentPostId={post.id} />
      )} */}
    </Suspense>
  )
}