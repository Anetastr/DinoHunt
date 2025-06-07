# DinoHunt
Jednoduchá klikací hra s dinosaury, ve které sbíráš body a postupuješ levely.


# DinoHunt

**DinoHunt** je jednoduchá klikací hra napsaná v čistém JavaScriptu, kde hráč kliká na dinosaury a vyhýbá se ohni. Hra je časově omezená a postupně se zrychluje podle skóre.

## Jak hra funguje

- Hráč má 25 sekund na to, aby nasbíral co nejvíce bodů
- Na náhodném políčku se každých 800 ms objeví buď:
  -  `dino1` → +1 bod
  -  `dino2` → +3 body
  -  `fire` → skóre = 0
- Klikáním na správné objekty hráč získává body
- Hra má tři úrovně obtížnosti:
  - **Level 1**: začátek (rychlost 800 ms)
  - **Level 2**: od 10 bodů (rychlost 600 ms)
  - **Level 3**: od 20 bodů (rychlost 400 ms)
- Po skončení se zobrazí skóre a možnost hrát znovu

##�Technologie

- HTML
- CSS
- JavaScript (DOM, eventy, časovače)


## Struktura složky
```
dinohunt/
│
├── index.html       // Struktura hry
├── style.css        // Vzhled hry
├── script.js        // Herní logika

```

> 📝 Projekt vytvořen v rámci výuky programování – jednoduchá JavaScript hra pro prezentaci před komisí.

