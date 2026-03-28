#!/usr/bin/env node

/**
 * Design Sandbox — Designer Setup Script
 *
 * Run via: npm run setup
 * Or let Claude Code run it for you by saying "I'm new, help me get started"
 *
 * This script:
 *   1. Asks for your name and team
 *   2. Adds you to the designer registry
 *   3. Creates your personal folder and landing page
 */

const fs = require("fs")
const path = require("path")
const readline = require("readline")

const ROOT = path.join(__dirname, "..")
const REGISTRY_PATH = path.join(ROOT, "src/app/prototypes/registry.ts")
const PROTOTYPES_DIR = path.join(ROOT, "src/app/prototypes")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()))
  })
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

function titleCase(str) {
  return str
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
}

function addToRegistry(slug, name, team) {
  const content = fs.readFileSync(REGISTRY_PATH, "utf8")

  // Check if slug already exists
  if (content.includes(`slug: "${slug}"`)) {
    console.log(`\nLooks like "${slug}" is already in the registry. Skipping that step.`)
    return
  }

  const newEntry = `  {\n    slug: "${slug}",\n    name: "${name}",\n    team: "${team}",\n    prototypes: [],\n  },\n`

  // Insert before the closing ] of the DESIGNERS array
  const marker = "\n]"
  const insertAt = content.lastIndexOf(marker)

  if (insertAt === -1) {
    throw new Error("Could not find the DESIGNERS array closing bracket in registry.ts")
  }

  const updated = content.slice(0, insertAt) + "\n" + newEntry + content.slice(insertAt)
  fs.writeFileSync(REGISTRY_PATH, updated)
}

function createLandingPage(slug, name) {
  const designerDir = path.join(PROTOTYPES_DIR, slug)

  if (!fs.existsSync(designerDir)) {
    fs.mkdirSync(designerDir, { recursive: true })
  }

  const pagePath = path.join(designerDir, "page.tsx")

  if (fs.existsSync(pagePath)) {
    console.log(`\nYour landing page already exists. Skipping that step.`)
    return
  }

  const firstName = name.split(" ")[0]
  const componentName = titleCase(firstName)

  const pageContent = `import { DesignerLandingPage } from "@/components/extended/designer-landing-page"

export default function ${componentName}Page() {
  return <DesignerLandingPage slug="${slug}" />
}
`

  fs.writeFileSync(pagePath, pageContent)
}

async function main() {
  console.log("\nWelcome to the Design Sandbox!\n")
  console.log("Let's get you set up. I'll ask you two quick questions.\n")

  const name = await ask("What's your full name? ")
  if (!name) {
    console.error("\nName is required. Please try again.")
    rl.close()
    process.exit(1)
  }

  const team = await ask("What team are you on? ")
  if (!team) {
    console.error("\nTeam is required. Please try again.")
    rl.close()
    process.exit(1)
  }

  const firstName = name.split(" ")[0]
  const slug = slugify(firstName)

  console.log(`\nSetting you up...`)

  try {
    addToRegistry(slug, name, team)
    createLandingPage(slug, name)

    console.log(`\nYou're all set, ${firstName}!`)
    console.log(`\nYour page will be live at: http://localhost:3000/prototypes/${slug}`)
    console.log(`\nNext: run "npm run sandbox" to start the app, then open that URL in your browser.\n`)
  } catch (err) {
    console.error(`\nSomething went wrong: ${err.message}`)
    console.error("Try asking Claude Code to set you up instead — just say \"I'm new, help me get started\".\n")
    process.exit(1)
  }

  rl.close()
}

main()
