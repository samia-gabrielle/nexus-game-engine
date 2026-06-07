# NEXUS Quick Start Guide

Ready to build the game? Follow these steps.

## 1️⃣ Install Dependencies

```bash
cd game-engine
npm install
```

This installs:
- `express` - Web server
- `cors` - Cross-origin requests
- `dotenv` - Environment config
- `inkjs` - Ink story runtime
- `nodemon` - Auto-restart on file changes

**Time: 2 minutes**

---

## 2️⃣ Start the Dev Server

```bash
npm run dev
```

You should see:
```
NEXUS Game Engine running on http://localhost:3000
Environment: development
```

Open browser to **http://localhost:3000**

**Time: 1 minute**

---

## 3️⃣ Create First Ink File

Create `game-engine/ink/nexus-main.ink`:

```ink
// NEXUS Main Story File
// Master narrative compiled to JSON

// ===== VARIABLES =====

VAR player_has_name = false
VAR mara_debt_registered = false
VAR shared_debt_registered = false
VAR consent_matters = false
VAR fourth_line_status = "scarred_incomplete"

VAR player_crossed_first_time = false
VAR mara_encountered = false
VAR mara_anger_expressed = false
VAR player_is_nobody_in_1920 = false

VAR entered_deep_city = false
VAR ivo_met = false
VAR sera_met = false
VAR community_refused_player = false

VAR restoration_faction_met = false
VAR reva_met = false
VAR entered_surface_core = false

LIST echoesUnlocked = ()

// ===== SCENES =====

=== ch01_scene01_2150_wakeup ===

A primeira coisa que você sente é frio.

Não o frio do ar. O frio de algo que esteve desligado por tempo demais.

Antes de abrir os olhos, você escuta água. Gotas batendo contra vidro.

~ player_crossed_first_time = true

* [Abra os olhos.]
    Seus olhos se abrem dentro de uma cápsula vertical.
    O vidro está embaçado por dentro.
    Luzes brancas piscam no teto.
    -> ch01_scene01_recognition

* [Fique quieto e escute mais.]
    Você escuta o som da chuva ácida contra vidro fino.
    Persistente. Implacável.
    Depois, você abre os olhos.
    -> ch01_scene01_recognition

=== ch01_scene01_recognition ===

Uma megacidade se ergue além das janelas em camadas infinitas de concreto.

Um monitor à sua frente mostra um corpo humano em linhas azuis.

O corpo é seu.

Ao lado dele, um campo vazio:

NOME: —

* [Qual é o meu nome?]
    O monitor pisca.
    Processando.
    Depois, a tela fica preta.
    
    Silêncio.
    
    Nome não encontrado.
    
    -> ch01_scene02_nexus_activation

* [Onde eu estou?]
    Seu corpo responde antes de sua mente.
    Taquicardia.
    Suor frio.
    Pânico.
    
    -> ch01_scene02_nexus_activation

=== ch01_scene02_nexus_activation ===

Os arcos da Máquina Nexus giram diante de você.

Quatro estruturas metálicas, uma dentro da outra, suspensas sobre um núcleo escuro.

Nenhum motor. Nenhum cabo. Apenas rotação.

* [Toco a máquina.]
    Você coloca a mão no vidro.
    Está quente. Pulsando.
    
    -> END

* [Fico observando.]
    A máquina continua girando.
    Sem pressa. Sem fim.
    
    -> END

=== END ===

(Placeholder - proper ending system coming)
```

**Time: 10 minutes**

---

## 4️⃣ Compile Ink to JSON

First, install Inky (the Ink editor):

1. Download from: https://github.com/inkle/inky/releases
2. Open `game-engine/ink/nexus-main.ink` in Inky
3. Go to File → Export Story JSON As...
4. Save as `game-engine/ink/compiled/nexus-main.json`

**Time: 5 minutes**

---

## 5️⃣ Update Backend to Use Compiled Story

Edit `game-engine/src/inkEngine.js`:

Find the `loadStory()` function and replace the placeholder:

```javascript
function loadStory() {
  if (compiledStory) return compiledStory;

  const storyPath = path.join(__dirname, '../ink/compiled/nexus-main.json');
  compiledStory = JSON.parse(fs.readFileSync(storyPath, 'utf-8'));

  return compiledStory;
}
```

**Time: 2 minutes**

---

## 6️⃣ Test in Browser

1. Go to `http://localhost:3000` in your browser
2. Click "Novo Jogo"
3. You should see Scene 1 narrative:
   > A primeira coisa que você sente é frio...
4. Click a choice (Abra os olhos / Fique quieto)
5. Scene 2 should display

**Time: 2 minutes**

---

## ✅ Success!

If you see the narrative flow, you've successfully:
- ✅ Set up Node.js backend
- ✅ Created Ink story structure
- ✅ Connected frontend to backend
- ✅ Got first 2 scenes playing

**Total time: ~25 minutes**

---

## 📋 Next: Batch Scene Conversion

Now convert all 18 scenes from `narrative/dialogues/` to Ink format.

Use the **INK_CONVERSION_GUIDE.md** for reference.

### Conversion Plan

**Act 1 (3 scenes):**
- `ch01_scene01_2150_wakeup` → Done above
- `ch01_scene03_first_crossing_1920` → Convert next
- `ch01_scene04_mara_laboratory_break_in` → Convert next
- `ch01_scene05_return_with_the_first_lie` → Convert next

**Act 2 (7 scenes):**
- `ch02_scene01_deep_city_after_first_lie`
- `ch02_scene02_archive_of_covered_names`
- `ch02_scene03_1970_the_possibility`
- `ch02_scene04_the_community_refuses_you`
- `ch02_scene05_2050_the_negotiation`
- `ch02_scene06_the_choice_that_wasnt_yours`
- `ch02_scene07_return_with_shared_debt`

**Act 3 (8 scenes):**
- `ch03_scene01_the_names_that_refuse_return`
- `ch03_scene02_the_restoration_faction`
- `ch03_scene03_surface_dependency`
- `ch03_scene04_mara_revisited`
- `ch03_scene05_the_restoration_engine`
- `ch03_scene06_the_fourth_line_decision`
- Plus 2 ending-specific scenes

---

## 🎯 Target Completion

- **By June 11**: All 18 scenes converted and compiled
- **By June 25**: Full playtesting complete
- **By July 10**: Ready for beta launch

---

## 💡 Tips

1. **Test frequently** - After every 3 scenes, compile and test in browser
2. **Use Inky editor** - Syntax highlighting helps catch errors
3. **Keep variables organized** - Put all `VAR` declarations at top
4. **Comment scenes** - Add scene title and duration as comments
5. **Test all choices** - Every branch should lead somewhere

---

## 🐛 Troubleshooting

### "Module not found: inkjs"
```bash
npm install inkjs
```

### "ENOENT: no such file or directory, open 'nexus-main.json'"
Make sure you:
1. Created `game-engine/ink/compiled/` directory
2. Exported from Inky to that exact path
3. Restarted the dev server

### "Cannot GET /"
Server started but frontend not loading. Try:
1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Clear browser cache
3. Check console for errors

### Scene shows but choices don't appear
Ink format issue. Check:
1. All choices start with `*`
2. Choices are indented under knot
3. `->` arrows point to valid knots

---

## 🚀 Ready?

Start with the Act 1 scene conversion. You've got this!

Questions? Check `IMPLEMENTATION_STATUS.md` for overview or `INK_CONVERSION_GUIDE.md` for detailed syntax help.
