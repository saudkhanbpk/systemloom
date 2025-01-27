import axios from "axios";

const getAllPostTitles = async () => {
  try {
    const response = await axios.get(
      "https://techcreator-backend.onrender.com/api/v1/blogs/all",
      {}
    );
    console.log("response blog", response)
    return response.data.blogs.map((post) => ({
      title: post.title
        ? post.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
        : "untitled",
      lastmod: new Date(post.createdAt).toISOString(),
    }));
  } catch (error) {
    console.error("Error fetching post titles:", error);
    return [];
  }
};

export async function GET(req, res) {
  const posts = await getAllPostTitles();
  // console.log(posts);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map(
        (post) => `
        <url>
          <loc>https://www.techcreator.co/blog/${post.title}</loc>
          <lastmod>${post.lastmod}</lastmod>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
