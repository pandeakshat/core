import fs from "fs"
import path from "path"
import fetch from "node-fetch"

const REPO_LIST = "./src/data/repo-list.json"
const OUT_JSON = "./src/data/projects.json"
const OUT_MD_DIR = "./src/content/projects"

// Fetch README for a repo
async function fetchReadme(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`
  const res = await fetch(url, {
    headers: { Accept: "application/vnd.github.v3.raw" },
  })
  if (!res.ok) {
    console.warn(`⚠️ Failed to fetch README for ${repo}: ${res.status}`)
    return null
  }
  return await res.text()
}

// Extract first paragraph for summary
function extractSummary(markdown) {
  if (!markdown) return ""
  const match = markdown
    .replace(/^# .*\n/, "") // remove first heading
    .split("\n")
    .find((line) => line.trim().length > 0)
  return match ? match.trim().replace(/^> /, "") : ""
}

async function main() {
  // ensure folders exist
  fs.mkdirSync("./src/content/projects", { recursive: true })

  const repos = JSON.parse(fs.readFileSync(REPO_LIST, "utf8"))
  if (!Array.isArray(repos)) {
    console.error("❌ repo-list.json must be an array of GitHub URLs")
    process.exit(1)
  }

  const results = []

  for (const repoUrl of repos) {
    const [owner, name] = repoUrl.replace("https://github.com/", "").split("/")
    console.log(`⏳ Fetching ${owner}/${name}...`)

    const readme = await fetchReadme(owner, name)

    if (readme) {
      // save markdown
      const mdPath = path.join(OUT_MD_DIR, `${name}.md`)
      fs.writeFileSync(mdPath, readme, "utf8")

      // build entry
      results.push({
        name,
        url: repoUrl,
        summary: extractSummary(readme),
      })
      console.log(`✅ Saved ${name}.md`)
    } else {
      console.warn(`⚠️ Skipped ${name} — no README`)
    }
  }

  fs.writeFileSync(OUT_JSON, JSON.stringify(results, null, 2))
  console.log(`✅ Synced ${results.length} projects → ${path.resolve(OUT_JSON)}`)
}

main().catch((err) => console.error("❌ Sync failed:", err))
