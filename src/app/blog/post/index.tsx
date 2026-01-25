import Image from "next/image";

interface PostProps {
  title: string;
  publishedAt: string;
  author: {
    name: string;
    avatar_url: string;
  } | null;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
}

export function Post(props: PostProps) {
  const {
    title,
    publishedAt,
    author,
    content,
    bannerImage,
    bannerImageHeight,
    bannerImageWidth,
  } = props;

  return (
<article className="w-full mb-10 flex flex-col items-start pt-20 px-4 text-left">
<h1 className="text-6xl font-black text-black mb-8 max-w-4xl">
        {title}
      </h1>

      {/* Author Section */}
      {author && (
        <div className="flex  items-center gap-3 mb-8">
          <Image
            src={author.avatar_url}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-900">
              {author.name}
            </p>
            {/* Optional metadata */}
            <p className="text-sm text-gray-500">{publishedAt}</p>
          </div>
        </div>
      )}

      {/* Banner Image */}
      {bannerImage && (
        <div className="mb-10">
          <Image
            alt="Blog banner image"
            src={bannerImage}
            width={bannerImageWidth}
            height={bannerImageHeight}
            className="rounded-xl object-cover max-w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Post Content */}
      <div
        className="text-xl max-w-3xl leading-10 prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
