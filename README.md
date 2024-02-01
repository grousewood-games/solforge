# Solforge - Mimicwurm Edition

A homebrew attempt at recreating classic [Solforge](https://en.wikipedia.org/wiki/SolForge).

- [Play the Game](https://grousewood-games.github.io/solforge/play/)
- [How to Play](https://grousewood-games.github.io/solforge/docs/rules)
- Additional [Info and FAQ](https://grousewood-games.github.io/solforge/docs/faq)

## Current Release

### (Forge Guardian) Beta

- :flower_playing_cards: Every card freely available. All 703 of 'em!
- :medal_military: Constructed and Draft modes.
- :robot: Battle vs the somewhat improved AI.
- :wrestling: Local head-to-head battle.
- :clown_face: Fun bonus modes.
- :crocodile: Unfriendly deckbuilder.

### Data Footprint

The core application (game logic, backgrounds, UI elements) will weigh in around 16mb. Each card level will draw around 70kb. If an enthusiastic player views every level of every card, the total download will be around 146mb.

Turning off the `Big Cards` option will shave 7mb off the core app, and 93mb from all the cards (an average of 50kb per card level). You won't see the art in full glory, but it will be respectful to your data plan. Turning off the `Animations` option will save 3.5mb.

## Supported Platforms

Feel free to log issues with your bad experiences; I'm limited with what devices I can test on.

### Browser

The drawing engine now leverages the [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) Web API. It has been polyfilled, but browsers from before March 2023 may fail to run the app.

MacOS Safari earlier than `v14.1` will likely not work. 

### Desktop

- Should work fine on a desktop monitor with standard resolution (1080p non-retina) and a pointer device.
- Smaller screens may crop. 
- 4K resolution is untested. I expect either the game takes up 1/4 of the screen, or everything is upscaled and looks fuzzy.
- Screen refresh rates of 60hz (or multiples of 60) should animate at 60fps. Other rates (e.g. 75hz) are untested. I expect they should work but with mild animation stutter (e.g. every fourth screen paint will look the same as the one before it).

### Mobile

- Touch controls work, are not the best. Use the :computer_mouse: icon or long-presses to mimic right-clicks.
- Certain screen sizes or aspect ratios may cut off parts of the game or the log.
  - This may be improved in the future.
- Phone screens are likely to be horrendously disappointing.

## Parental Guide

### Violence

The game has implied fantasy violence and death ("doing battle", "inflicting damage", creatures "being destroyed"). Visually the cards just bump against each other. Some card art may depict violence in still form (e.g. creatures burning, inflicted with poison, having wounds).

### Nudity

The game artwork can contain scantily clad creatures of varying species and genders. I don't believe you can see any naughty bits in the raw, nor are there any depictions of naughty acts.

### Scary Stuff

The game art contains scary monsters. Very scary. Look out!

## Legal Stuff

I've looked at the various licenses on github but I don't read lawyer well. My code is open, do with it as you please. Giving credit would be appreciated but I won't go to war over it.

That said, as outlined in the [credits](https://grousewood-games.github.io/solforge/docs/faq#credits), a good portion of this is the intellectual property of others. Trying to take anything from this repo and monetize it in any form is highly inadvisable. You might get a lunch date with a cease & desist.

Use your noggin :brain:. Show respect :trophy:.