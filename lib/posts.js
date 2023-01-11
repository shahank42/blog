import fs from "fs";
import path from "path";
import matter from "gray-matter";


const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.slice(0, 4);
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const frontMatter = matter(fileContents);

        return {
            id,
            ...frontMatter.data,
        };
    });

    return allPostsData.sort((a, b) => ((a.date < b.date) ? 1 : -1));
}