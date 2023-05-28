# Info & FAQ

## Contents

- [Credits](#credits)
- [Getting Started](#getting-started)
- [Feature Requests and Problems](#feature-requests-and-problems)
- [Game Details](#game-details)

### Credits

All game rules, card art, card names & text, dog bark battle sound, and the vast majority of the UI art assets is the creation and intellectual property of [Stoneblade Entertainment](https://stoneblade.com/). I am greatful of their [permissiveness](https://www.reddit.com/r/SolForge/comments/134os4h/a_call_to_codersenthusiastsanybody_really/) in letting me share this free tribute to the original game.

The fancy font, `Cinzel`, was created by [Natanael Gama](https://fonts.adobe.com/designers/natanael-gama).

The orange scroller arrow icons were made by [Programmer16](https://opengameart.org/content/simple-orange-pixel-art-ui).

A thank you to whomever wrote and published the "Advanced Solforge Rules" back in the day (Pion? Piquadore?). It has been an indispensable guide in my attempts to recreate the game as accurately as possible.

All coding done by me, your friendly neighbourhood grouse. Hat tip to the implementers of the [CanvasAPI](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), [Github](https://github.com) for the free hosting, and [Photopea](https://www.photopea.com/) for the image editing trickery.

### Did You Invent This Game?

No. [Solforge](https://en.wikipedia.org/wiki/SolForge) was created by Stoneblade Entertainment. It released in 2013 and shut down in 2018.

### Do You Make Money From This?

No. A strict condition of Stoneblade Entertainment allowing something like this is that it remains free in its entirety. If you would like to make a monetary contribution, my suggestion is to check out [Solforge Fusion](https://solforgefusion.com/). It is the spiritual successor to Solforge, and any treats purchased will directly benefit the people who designed the original game, procured the artwork, etc. Visit my [wish list](#wish-list) if you think you may have something you can contribute. If you want to shower me with praises or well-mannered insults, see the [Contact](https://github.com/grousewood-games#contact) info or comment on the [General Discussion](https://github.com/grousewood-games/solforge/discussions/1).

## Getting Started

### Recommended Setup

At this point, the game "works on my machine". I recommend using a desktop style computer that has a mouse/trackball. Anything else is a big maybe.

A standard widescreen monitor is suggested. 1920x1080 is fine. 1600x900 is tight, might need to shrink your browsers' chrome. Anything less will be rubbish. A vertical phone style screen will be pure comedy.

Tablet / retina screens _work_ but not very well. See the [section](#does-this-work-on-a-touchscreen-tablet) below.

### Recommended Gameplay

The AI is allright but still has a long way to go. Playing draft or building a funsies deck will provide a respectable battle (sometimes). A finely tuned constructed deck will beat it easily. However you can turn on some of the optional game modes to make it more of a challenge.

### How Do I Play?

- Rule #1: Have a good time.
- Rule #2: Obey all rules.

Additional details can be found on the [rules](rules.md#rules) page.

### Known Shortcomings

- The detailed card view on Forgeborn creatures is squished to fit.
- It is not obvious what the source of an interactive trigger is.
  - Example, play `Lvl1 Grove Huntress` when `Lvl2 Lifeshaper Savant` is on the board. When the action highlights appear on your friendly creatures, it is not clear if you are applying the Huntress buff or the Savant buff.
- No way to see your deck, discard pile, or card counts in either.
- Not everything is shown in the log.
- Some text may render funny / too thin in Chromium based browsers (my bad for developing primarily in Firefox).
- The AI can make some terrible choices.

## Feature Requests and Problems

### Why Is It So Terrible?

I know, bud. I know. This is a one grouse shop, and I'm not overly talented in the UI department. At least you didn't buy it.

### Will You Make This Open Source?

Perhaps when I am "finished". Right now only the minified build will be public, as I would like to continue working without someone else forking it and trying to one-up the project.

### Will You Implement Online Play?

Unlikely. Originally I focused on single player as I did not have permission to make this public (July 2022). When it was revealed that this type of thing would be allowed (April 2023), it became an option. I had some hesitation due to the effort level and the likely scenario that [nobody would play it for long](https://www.reddit.com/r/SolForge/comments/tiv839/what_would_it_take_to_get_you_to_play/). Shortly after (May 2023), Kaelari [announced](https://www.reddit.com/r/SolForge/comments/13c7ahd/kaelforge_a_solforge_revival_attempt/) he was ressurecting his own effort. He is the people's champion of Solforge (a title well earned through colossal efforts over years; I enjoyed many a tourny on `solforgeladder.com`), and his server kung-fu is better than mine. Competing with him seems a questionable time investment; there are a number of other projects I'm itching to get to. If he aborts his initiative, then I'll re-evaluate things.

### Does This Work On A Touchscreen Tablet?

Not very well. I only tested it briefly and a day before releasing the first beta.

Tapping works ok, however the fonts in the game area tend to get very blurry on screens with retina-level resolution. Tablet screen aspect ratio is also not ideal; I found I needed to shrink my browser chrome, and even then the log was quite crammed.

The file saving and loading for constructed decks is highly suspect.

I plan to take a shot at making this work, since I'd enjoy the option. Requires some R&D and an impact analysis on how much refactoring is required to adapt to retina resolution.

### Can This Be Played With A Keyboard?

No. I may add that in the future.

### Will You Support Drag & Drop?

While I admit dragging cards to their targets is way more fun, it would involve an animation framework that is just not a priority right now. Clickity-clicks will have to do.

### I Found A Bug

Feel free to [log a new issue](https://github.com/grousewood-games/solforge/issues/new), or message me about it if you don't have a Github account (see the [Contact](https://github.com/grousewood-games#contact) page). Please review the [issue log](https://github.com/grousewood-games/solforge/issues) first as it may already be logged.

If the game freezes, providing a screenshot or copied text from the browsers console (mash the `F12` key to see it) may be helpful.

Reports of incorrect text/stats on cards (or cards not doing what they are supposed to) are also encouraged.

### Can I Request A New Feature?

You can. I make no promises that it will get get done, but no harm in asking.  Please review this FAQ and the [issue log](https://github.com/grousewood-games/solforge/issues) first as it may already be addressed. Give a :+1: reaction to existing entries you want. Otherwise feel free to [open a new discussion](https://github.com/grousewood-games/solforge/discussions), or message me about it if you don't have a Github account (see the [Contact](https://github.com/grousewood-games#contact) page).

### Do You Plan To Add More Cards

Yes! Would like to get them all implemented. Set 3 should happen for sure, barring any disasters. Shortcomings of the UI will likely be prioritized first (some Set 3 cards also require a discard picker which needs to be built).

### Will You Implement Cards With Pre-Rebalance Stats?

Likely no. Would be a bit fun for some of the older decks, but is a pile of dull work just coding in the alt data and switches to manage it.

### You Call That A Deckbuilder?

Yeah it's nasty. I just wanted something that would let people brew a deck. Making a proper builder with filters and such is going to take a minute.

## Game Details

### Differences

Certain mechanics found in the original game have been slightly changed for my own sanity.

- `Lvl3 Lyria, Muse of Varna` now places creatures all at once, not in sequence.
  - An example: if Lyria brought back four `Lvl1 Spring Dryads`, in the original game you would end up with a 4/4, 5/5, 6/6, and 7/7 set of Dryads. In this edition, you will end up with four 7/7 Dryads.
- Batch resolution is not randomized. The actual order is likely too convoluted to describe here, but it is deterministic.
  - An example: a 5/5 `Lvl1 Spring Dryad` is on board, `Lvl2 Weirwood Patriarch` is forged.
  - In the original game, the effect that triggered first was random. You could end up with a 6/6 Dryad or a 9/9 Dryad.
  - In this version, the order will be the same if the initial conditions are the same. When I run out of real work I might attempt to distill the algo into something understandable.
  - For the real keeners, the order likely depends on both creature position relative to each other, and which event gets generated first. In this case there is one event (Creature Enters), so Dryad to the left of WWP is _probably_ 6/6, to the right is _probably_ 9/9.
- `Brightsteel Gargoyle` does not change image when in defender mode. The amount of trickery to make this one card act fancy is currently in the "not worth it" pile.
- When playing `Metasight`, once a first card is selected for leveling, it is leveled. You cannot cancel back and re-pick as you can in most multi-select operations.
- There is currently no "sudden death" mode. If you both die and have the same health in death, you both win :trophy:.
- Rules regarding creatures who affect other creatures based on event triggers, but die as the events happen. These were unclear in some cases and may be implemented different.
  - The rules for `Dr. Frankenbaum` and `Yuru, the Necrosage` were documented. Their effects only apply if they were alive, or died at the same time, when the target creature died. The time here is the specific death time, not the death check at the end of a [batch](rules.md#advanced-event-timing).
  - As such, the following cards are using the same principle: `Tarsus, Deathweaver`, `Uterradon Rex`, `Oreian Justicar`, `Sorrow Harvester`.
  - An example:
    - A player controls `Lvl1 Tarsus` and `Lvl1 Grove Matriarch`. Tarsus is opposing `Lvl1 Vengeful Spirit`, Matriarch is opposing `Lvl1 Swampmoss Lurker`.
    - Battle happens. In the combat batch, every creature but Tarsus dies. Tarsus has 2 health remaining. Nothing happens in the combat effects batch.
    - In the death effects batch, both Vengeance triggers are resolved.
    - If the Spirit trigger resolves first, Tarsus will be dead prior to the Matriarch dropping a `Seedling`. The Seedling will not get buffed by Tarsus.
    - If the Matriarch trigger resolves first, Tarsus is still alive and will buff the Seedling. This happens even though the "Creature Enters" event is processed in the next batch, and Tarsus has been marked dead at the end of the death effects batch.
- Rules around extra battles are slightly different.
  - Scenario 1: Play `Lvl2 Master of Elements`, Battle, play `Lvl1 Call the Lightning`, play `Lvl1 Lightning Brand`.
    - In original Solforge, `Master of Elements` would not battle at all.
    - In this version, `Master of Elements` would battle one time after `Lightning Brand` was cast.
  - Scenario 2:  Play `Lvl2 Master of Elements`, Battle, play `Lvl1 Lightning Brand`, play `Lvl1 Call the Lightning`.
    - In original Solforge, `Master of Elements` would battle twice after `Call the Lightning` was cast.
    - In this version, `Master of Elements` would battle one time after `Call the Lightning` was cast.
  - The new general rule is the first battle is the primary battle, and creatures only have a chance to participate in that if they are eligible at the time the button is pressed. Extra battles can only be spent after the primary battle. If a creature has an extra battle and is offensive, the battle button will be made available.  

### Wish List

I only captured a subset of information and assets back when the game was live. If you have any of the following and want to donate to help make the game better, please [get in touch](https://github.com/grousewood-games#contact)

- The original Alloyin, Nekrium, Tempys, and vanilla playmat images.
- Effect sprite sheets (death animation, animations for the four faction effects).
- Effect sounds (would play when the above sprites animate).
- Turn count progress sprite (the green stuff in an arc that advanced around the player portrait).
- Draft Pool lists of various eras.
- Deck Lists.
  - Various Tournaments (top X decks).
  - ZubjectX's Gimmick Decks (not on [YouTube](https://www.youtube.com/@ZubjectX/about) anymore).
  - Zan's Crazy Deck Shop (was on the original forums).
- High quality images of certain card art from Set 7 (the typical size is 820x820 pixel).
  - `Anvilbreaker`, `Automation Prime`, `Bulwark Battalion`, `G.S.F. Commando`, `Guardians Assemble`, `Ironbeard, Ascendant`, `Metadata Redactor`, `Ordinance Captain`, `Stasis Indexer`, `Steelspark Tinkerer`, `Tower Cannoneer`, `Voltaic Prophet`
  - `Avarice, the Insatiable`, `Bride of Frankenbaum`, `Ceaseless Grimgaunt`, `Cercee's Call`, `Cyrus the Merciless`, `Disciple of Vyric`, `Ebonskull Diabolist`, `Indomitable Fiend`, `Lichmane Dragon`, `Murdurous Necromancer`, `Rite of Undeath`, `Scourge Knights`, `Undying Legacy`
  - `Blazing Hostility`, `Blitzmane, the Destroyer`, `Cauldron Mystic`, `Chaos Twister`, `Cyclone Rider`, `Dragonkeeper Shaman`, `Fit of Rage`, `Iceshard Berserker`, `Lightning Tamer`, `Magmify`, `Ritual of Elements`, `Slumbering Shrine`, `Stampeding Mongosaur`, `Unstable Asir`, `Uranti Stormshaper`, `Warhound Courser`, `Warhound Raider`
  - `Demara's Pitguard`, `Ether Wolves`, `Harbringer of Spring`, `Herd Mother`, `Living Hive`, `Lorus, the Unrivaled`, `Primeval Ancient`, `Relentless Wanderers`, `Shardplate Toxoid`, `Victory Rush`, `Wegu's Embrace`
