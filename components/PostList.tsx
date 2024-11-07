import PostCard from '../components/PostCard';
import { getAllPosts, getAuthor, getAuthorPosts } from '../lib/cosmic';

export async function PostList({ 
  authorSlug, 
  showLatestOnly = false // New prop with default value false
}: { 
  authorSlug?: string,
  showLatestOnly?: boolean 
}) {
  let posts = await getAllPosts();
  let author;
  
  if (authorSlug) {
    author = await getAuthor(authorSlug);
    posts = await getAuthorPosts(author.id);
  }

  // Only slice if showLatestOnly is true
  const displayPosts = showLatestOnly ? posts?.slice(0, 3) : posts;

  return (
    <>
      {author && (
        <h1 className="my-4 text-4xl font-bold leading-tight tracking-tight text-zinc-700 dark:text-zinc-300">
          Posts by {author.title}
        </h1>
      )}
      {!posts && 'You must add at least one Post to your Bucket'}
      {displayPosts &&
        displayPosts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </>
  );
}