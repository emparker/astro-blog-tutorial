import rss from '@astrojs/rss';

import { formatBlogPosts } from "../js/utils"

export async function GET(context) {
// console.log('CONTEXT: ', context)

  const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
//   console.log('postImportResult: ', postImportResult)

  const posts = formatBlogPosts(Object.values(postImportResult));
//   console.log('POSTS: ', posts)

return rss({
    title: 'Emily’s Astro Blog',
    description: 'A humble Dev’s guide to the stars',
    site: context.site,
    items: posts.map((post) => ({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        pubDate: post.frontmatter.date,
        // customData: post.frontmatter.customData,
        link: post.url,
    //   Compute RSS link from post `slug`
    //   This example assumes all posts are rendered as `/blog/[slug]` routes
        // link: `/blog/${post.slug}/`,
    })),
  });


}