import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type Props = {
  post: BlogPost
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post
  const formattedDate = getFormattedDate(date)
  return (
    <li className="mt-4 text-2xl dark:text-white/90" key={id}>
      <Link className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}>{title}</Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  )
}
