import fs from "fs"
import path from "path"
import fetch from "node-fetch"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const reposList = JSON.parse(fs.readFileSync("./data/repo-list.json", "utf8"))

async function getRepoDetails(repoUrl) {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/)
  if (!match) return null

  const [, owner, repo] = match
  const headers = { Authorization: `token ${GITHUB_TOKEN}`, "User-Agent": "project-sync-script" }

  const [repoData, readmeRes] = await Promise.all([
    fetch(`https://api.github.com/repos/${owner}/${repo}`, { headers }).then(r => r.json()),
    fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, { headers })
      .then(r => r.ok ? r.json() : null)
  ])

  let readme = ""
  if (readmeRes?.content) {
    readme = Buffer.from(readmeRes.content, "base64").toString("utf8")
  }

  return {
    id: repoData.id,
    name: repoData.name,
    description: repoData.description,
    url: repoData.html_url,
    homepage: repoData.homepage,
    topics: repoData.topics || [],
    stars: repoData.stargazers_count,
    forks: repoData.forks_count,
    language: repoData.language,
    readme
  }
}

async function run() {
  const allData = []
  for (const repo of reposList) {
    const data = await getRepoDetails(repo)
    if (data) allData.push(data)
    await new Promise(r => setTimeout(r, 1000)) // rate limit safety
  }

  const outputPath = path.resolve("./src/data/projects.json")
  fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2))
  console.log(`✅ Synced ${allData.length} projects → ${outputPath}`)
}

run().catch(err => {
  console.error("❌ Error syncing projects:", err)
  process.exit(1)
})
