"use server";
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export async function createPost(prevSate, formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    const errors = [];

    if (!title) errors.push("Title is required");
    if (!image || image.size === 0) errors.push("Image is required");
    if (!content) errors.push("Content is required");

    if (errors.length > 0) return { errors };

    await storePost({
        imageUrl: "",
        title,
        content,
        userId: 1,
    });

    redirect("/feed");
}
