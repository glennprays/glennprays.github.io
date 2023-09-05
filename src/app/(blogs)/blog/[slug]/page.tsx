import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { blogDir } from "@/constans/blog";

export async function generateStaticParam() {
    const files = fs.readdirSync(path.join(blogDir));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markdownFile = fs.readFileSync(
        path.join(blogDir, slug + ".mdx"),
        "utf-8"
    );

    const { data: fontMatter, content } = matter(markdownFile);

    return {
        fontMatter,
        slug,
        content,
    };
}

export default function Page({ params }: any) {
    const props = getPost(params);

    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i dark:prose-invert mx-auto">
            <h1>{props.fontMatter.title}</h1>
            <MDXRemote source={props.content} />
        </article>
    );
}