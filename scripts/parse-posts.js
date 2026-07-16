const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "../posts");
const OUTPUT_DIR = path.join(__dirname, "../src/data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

function parseFrontmatter(fileContent) {
  const frontmatterRegex = /^---\r?\n([\s\S]+?)\r?\n---/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) return null;
  
  const yamlSection = match[1];
  const metadata = {};
  
  yamlSection.split("\n").forEach(line => {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();
      metadata[key] = val.replace(/^["']|["']$/g, ""); // strip outer quotes
    }
  });
  
  const content = fileContent.replace(frontmatterRegex, "").trim();
  return { metadata, content };
}

function buildPostsJson() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.log("Posts directory not found. Creating...");
    fs.mkdirSync(POSTS_DIR);
  }
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(POSTS_DIR);
  const posts = [];

  files.forEach(file => {
    if (file.endsWith(".md")) {
      const filePath = path.join(POSTS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const parsed = parseFrontmatter(fileContent);
      
      if (parsed) {
        posts.push({
          slug: file.replace(".md", ""),
          ...parsed.metadata,
          body: parsed.content
        });
      }
    }
  });

  // Sort posts by slug or title if needed
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), "utf-8");
  console.log(`Successfully parsed ${posts.length} posts into ${OUTPUT_FILE}`);
}

buildPostsJson();
