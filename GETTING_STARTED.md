# Getting Started with the Design Sandbox

This is a space for designing and prototyping with real components. You describe what you want to build, and Claude — your AI pair — builds it for you in a live, clickable preview in your browser.

No coding required.

---

## Optional: Setting up your terminal (Mac)

If you've never used a terminal before, this section is for you. If you're already comfortable, skip ahead to [Starting Claude Code](#starting-claude-code).

### What is a terminal?

A terminal is a text-based way to talk to your computer. It looks a bit scary, but you only need to know a handful of things to get going — and Claude will handle most of it for you.

### Step 1 — Open the Terminal app

Press **Command + Space** to open Spotlight, type **Terminal**, and press Enter. A window with a black or white background and a blinking cursor will appear. That's your terminal.

> **Tip:** If you'd prefer something that looks a bit friendlier, you can install [Warp](https://www.warp.dev/) — it's a modern terminal app for Mac that's easier on the eyes.

### Step 2 — Navigate to the project folder

Instead of typing a file path, you can drag and drop:

1. Type `cd ` (with a space after it) in the terminal — **don't press Enter yet**
2. Open Finder and find the `design-sandbox` folder
3. Drag that folder into the terminal window
4. The path fills in automatically — now press **Enter**

You're now "inside" the project folder.

### Step 3 — Install Node.js (one-time setup)

Claude Code needs Node.js to run. Check if you have it by typing this and pressing Enter:

```
node --version
```

If you see a version number (like `v20.11.0`), you're good — skip to Step 4.

If you see an error, install Node.js:
1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** version
2. Open the downloaded file and follow the installer
3. Once installed, close and reopen your terminal, then try `node --version` again

### Step 4 — Install Claude Code (one-time setup)

Type the following and press Enter:

```
npm install -g @anthropic-ai/claude-code
```

This downloads and installs Claude Code on your computer. It may take a minute. When you see the cursor again, it's done.

### Step 5 — Log in to Claude Code (one-time setup)

Type:

```
claude
```

The first time you run this, it will ask you to log in with your Anthropic account. Follow the prompts. Once you're in, you'll see a `>` prompt — that's Claude waiting for you.

---

## Starting Claude Code

Every time you want to use the sandbox:

1. Open your terminal
2. Navigate to the project folder (drag the folder after `cd ` as described above)
3. Type `claude` and press Enter

You'll see a `>` prompt. Claude is ready.

---

## Your first time — getting set up

Once Claude is running, just type:

> **"I'm new, help me get started"**

Claude will ask you two questions — your name and your team. Answer them, and Claude will set up your personal space in the sandbox automatically. No files to edit, no code to copy.

When it's done, it will tell you your personal URL. To see it in your browser, tell Claude:

> **"Start the app for me"**

Claude will start everything up and tell you to open your browser to `localhost:3000`.

---

## Building your first prototype

Once you're set up, just describe what you want to explore. For example:

> "I want to prototype a new onboarding flow for first-time users"

> "Can we try a different layout for the settings page?"

> "I want to design what the empty state looks like when someone has no projects yet"

Claude will tell you its plan before building anything — you can say yes, or give feedback to adjust. Once you approve, it builds it and gives you a link to open in your browser.

---

## Day-to-day use

You don't need to memorise any commands. Just talk to Claude naturally:

| What you want | What to say |
|---|---|
| Start the app | "Start the app" |
| Create a new prototype | "I want to prototype [thing]" |
| Make a change | "Can you change the header to show X instead?" |
| See your prototypes | "What prototypes have I built?" |
| Browse all components | "What components can I use?" |

---

## If something goes wrong

Claude handles most things automatically, but if you're stuck or something looks wrong, say:

> **"Switch to verbose mode"**

This tells Claude to show you exactly what it's doing — file names, what it changed, any errors. This makes it much easier to debug together.

When you're done debugging, say:

> **"Switch back to simple mode"**

and Claude will go back to plain-English responses.

---

## Questions?

Just ask Claude directly. It knows the full component library, the project structure, and how everything fits together.
