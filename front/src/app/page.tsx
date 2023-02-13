"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/utils/axiosClient";
import { Post } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const queryClient = useQueryClient();
  const { data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get<{ posts: Post[] }>("/all-posts");
      return data;
    },
  });

  if (!data) return <div>Loading...</div>;
  if (error) return "An error has occurred!";

  console.log(data);

  return (
    <main className={styles.main}>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
