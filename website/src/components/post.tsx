import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

export function PostCard({ post }: { post: any }) {
  const data = post.data.frontmatter;

  return (
    <div className="flex flex-col max-w-[40rem]">
      <Link href={`${post.group}/${post.slug}`}>
        <Button variant="link" className="p-0 w-full">
          <h2 className="font-bold text-2xl w-full text-left">{data.title}</h2>
        </Button>
      </Link>
      <div className="flex flex-row gap-2 items-center">
        <time className="text-sm text-neutral-500">{data.date}</time>
        <Rating value={data.ratings.total} />
      </div>
      <p className="text-neutral-700">{data.description}</p>
    </div>
  );
}

export function Rating({ value, className }: { value: number; className?: string }) {
  // out of 5

  return (
    <Badge
      variant="outline"
      className={`flex flex-row gap-1 items-center justify-center ${className ?? ""}`}
    >
      <Star size={14} />
      {value.toFixed(1)}
    </Badge>
  );
}
