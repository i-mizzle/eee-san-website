import ArrowNarrowRight from '@/components/elements/icons/ArrowNarrowRight'
import ChevronIcon from '@/components/elements/icons/ChevronIcon'
import { getPosts } from '@/lib/wordpress'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type ArticlesProps = {
  categorySlug?: string
}

export default async function Articles({ categorySlug }: ArticlesProps) {    
    const posts = await getPosts({
        categorySlug,
        embed: true,
        perPage: 10
    })
    return (
        <section id="articles" className="px-8 lg:px-12 xl:px-32 2xl:px-44 py-20 min-h-[60vh] h-inherit">
            <div className="w-full xl:w-1/2" data-aos="fade-up" data-aos-delay="50" >
                <h1 className="text-5xl font-outfit font-medium leading-[1em] text-eee-dark-gray">Latest Articles</h1>
                <p className="mt-5 mx-auto text-eee-dark-gray">Fresh perspectives on law, business, and regulation—curated to keep you ahead in a constantly changing landscape.</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-8 mt-10">
                {posts.length === 0 && (
                    <p className="col-span-full text-center text-[18px] text-[#414042] dark:text-gray-300">
                    No posts found.
                    </p>
                )}
                {posts.map((post: any) => {
                    const image =
                    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url

                    return (
                    <article key={post.id} className="" data-aos="fade-up" data-aos-delay="150">
                        {/* <img src={image} alt="" className="rounded w-full max-w-full" />} */}
                        {image && 
                        <Link href={`/articles/${post.slug}`} >
                        <div className="relative w-full h-60 xl:h-110 rounded overflow-hidden bg-eee-dark-gray/50">
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
                        </Link>}
                        <Link href={`/articles/${post.slug}`}>
                        <h2
                        className="text-eee-black text-xl transition duration-200 hover:text-eee-red font-semibold mt-6 mb-3 lg:mb-10"
                            dangerouslySetInnerHTML={{
                            __html: post.title.rendered
                            }}
                        />
                        </Link>

                        <div className='lg:flex items-start gap-x-6'>
                            <div className="w-full lg:w-3/12 mb-3">
                                <p className="font-medium text-eee-dark-gray text-[15px]">
                                    {post._embedded?.author?.map((auth: any, authIndex: number) => (
                                    <span key={authIndex}>{auth.name}</span>
                                    ))}
                                </p>
                                <p className="text-[13px] text-[#737373]">{moment(post.date).format(`D MMMM YYYY`)}</p>

                                <Link href={`/articles/${post.slug}`} className="hidden lg:flex items-center gap-x-2 cursor-pointer hover:text-eee-dark-gray text-eee-red transition duration-200 font-medium text-sm mt-6.5">
                                    Read more
                                    <ArrowNarrowRight className="w-5" />
                                </Link>
                            </div>
                            
                            <div className="w-full lg:w-9/12 text-[15px] text-eee-dark-gray"
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered
                            }}
                            />

                            <Link href={`/articles/${post.slug}`} className="flex lg:hidden items-center gap-x-2 cursor-pointer hover:text-eee-dark-gray text-eee-red transition duration-200 font-medium text-sm mt-6.5">
                                Read more
                                <ArrowNarrowRight className="w-5" />
                            </Link>
                        </div>
                    </article>
                    )
                })}
            </div>

            <div className='w-max mx-auto mt-20'>
                <Link  href={`/articles`} className='text-[16px] rounded-full bg-eee-red font-google-sans text-eee-white font-semibold px-8 py-6 transition duration-200 hover:bg-eee-black cursor-pointer flex items-center justify-center gap-x-2'>
                    See all our articles
                    <ChevronIcon className="w-4 h-4 rotate-180 mt-1" />

                </Link>
            </div>
            
        </section>
    )
}

