# 🚀 Launch NEXUS Game - Quick Start

You're 30 seconds away from playing the first scene!

## Step 1: Install Dependencies (2 min)

```bash
cd game-engine
npm install
```

Wait for it to finish. You'll see:
```
added 50 packages in 2m
```

## Step 2: Start the Game Server (1 min)

```bash
npm run dev
```

You should see:
```
NEXUS Game Engine running on http://localhost:3000
Environment: development
```

**Keep this terminal open!**

## Step 3: Open in Browser (10 sec)

Open your browser to:
```
http://localhost:3000
```

## Step 4: Play! 🎮

1. Click **"Novo Jogo"** button
2. You'll see Scene 1 narrative: "A primeira coisa que você sente é frio..."
3. Click a choice to continue
4. Keep playing through Scene 1!

---

## What Should Happen

**You should see:**
- ✅ Dark cyberpunk UI with cyan text
- ✅ Narrative text from Scene 1
- ✅ Two choice buttons:
  - "Abra os olhos."
  - "Fique quieto e escute mais."
- ✅ Scene progresses when you click a choice
- ✅ Sidebar with Fourth Line indicator and empty notebook

**If you see errors:**

### "Cannot find module 'inkjs'"
```bash
npm install inkjs
npm run dev
```

### "Cannot GET /"
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart server with Ctrl+C then `npm run dev`

### "Compiled story not found"
The JSON file is already created at `game-engine/ink/compiled/nexus-main.json` — it should work!

---

## 🎯 Next Steps (After Playing)

Once you've seen it work:

1. **Convert more scenes** using `INK_CONVERSION_GUIDE.md`
2. **Add Act 1 scenes** (4 more scenes)
3. **Test all paths** through all endings

---

## 📋 Technical Notes

- **Backend:** Running on `localhost:3000`
- **Frontend:** Browser at http://localhost:3000
- **State:** Saved as JSON in `game-engine/saves/`
- **Story:** Compiled Ink in `game-engine/ink/compiled/nexus-main.json`

---

## 🛑 Stop Server

Press **Ctrl+C** in the terminal to stop.

---

**You've got this! Enjoy NEXUS! 🎭**
