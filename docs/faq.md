# Info & FAQ

## Contents

- [Credits](#credits)
- [Getting Started](#getting-started)
- [Feature Requests and Problems](#feature-requests-and-problems)
- [Game Differences](#game-differences)
- [Wish List](#wish-list)

## Credits

All game rules, card art, card names & text, dog bark battle sound, and the vast majority of the UI art assets is the creation and intellectual property of [Stoneblade Entertainment](https://stoneblade.com/). I am greatful of their [permissiveness](https://www.reddit.com/r/SolForge/comments/134os4h/a_call_to_codersenthusiastsanybody_really/) in letting me share this free tribute to the original game.

The fancy font, `Cinzel`, was created by [Natanael Gama](https://fonts.adobe.com/designers/natanael-gama).

The orange scroller arrow icons were made by [Programmer16](https://opengameart.org/content/simple-orange-pixel-art-ui).

Square icons generated on [Game-Icons](https://game-icons.net).

Enhanced versions of the large card frames are courtesty of [Spruce](https://reddit.com/user/SolSpruce/).

A thank you to `Ximane` who wrote and published the "[Advanced Solforge Rules](https://solforge.fandom.com/wiki/Advanced_Rules)" back in the day. It has been an indispensable guide in my attempts to recreate the game as accurately as possible.

Much respect to [Kaelari](#will-you-implement-online-play) for his generous sharing of some original game assets.

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

- Not everything is shown in the log.
- Some text may render funny / too thin in Chromium based browsers (my bad for developing primarily in Firefox).
- The AI can make some terrible choices.
- The mobile & touch screen experience is not great.

## Feature Requests and Problems

### Why Is It So Terrible?

I know, bud. I know. This is a one grouse shop, and I'm not overly talented in the UI department. At least you didn't buy it.

### Will You Make This Open Source?

Perhaps when I am "finished". Right now only the minified build will be public, as I would like to continue working without someone else forking it and trying to one-up the project.

### Will You Implement Online Play?

Unlikely. Originally I focused on single player as I did not have permission to make this public (July 2022). When it was revealed that this type of thing would be allowed (April 2023), it became an option. I had some hesitation due to the effort level and the likely scenario that [nobody would play it for long](https://www.reddit.com/r/SolForge/comments/tiv839/what_would_it_take_to_get_you_to_play/). Shortly after (May 2023), Kaelari announced he was ressurecting his own effort. He is the people's champion of Solforge (a title well earned through colossal efforts over years; I enjoyed many a tourny on `solforgeladder.com`), and his server kung-fu is better than mine. Competing with him seems a questionable time investment; there are a number of other projects I'm itching to get to.

Here is a post containing links to play the current version of [KaelForge](https://www.reddit.com/r/SolForge/comments/13uukrm/kaelforge_set_1_and_15_done_you_can_play_solforge/).

### Does This Work On A Touchscreen Tablet?

Not very well. I do plan to improve this over time. That said, I am limited to one older device to test on.

See the [game interface](rules.md#touch-screen-support) section for what type of touch support is currently implemented.

Current roadblocks include varying screen aspect ratios and resolutions, and differing standards implementions on Android and iOS (font rendering and touch events in particular).

### Can This Be Played With A Keyboard?

No. I may add that in the future.

### Will You Support Drag & Drop?

While I admit dragging cards to their targets is way more fun, it would involve an animation framework that is just not a priority right now. Clickity-clicks will have to do.

### I Found A Bug

Feel free to [log a new issue](https://github.com/grousewood-games/solforge/issues/new), or message me about it if you don't have a Github account (see the [Contact](https://github.com/grousewood-games#contact) page). Please review the [issue log](https://github.com/grousewood-games/solforge/issues) first as it may already be logged.

If the game freezes, providing a screenshot or copied text from the browsers console may be helpful (mash the `F12` key to see it).

Reports of incorrect text/stats on cards (or cards not doing what they are supposed to) are also encouraged.

### Can I Request A New Feature?

You can. I make no promises that it will get get done, but no harm in asking.  Please review this FAQ and the [issue log](https://github.com/grousewood-games/solforge/issues) first as it may already be addressed. Give a 👍 reaction to existing entries you want. Otherwise feel free to [open a new discussion](https://github.com/grousewood-games/solforge/discussions), or message me about it if you don't have a Github account (see the [Contact](https://github.com/grousewood-games#contact) page).

### Do You Plan To Add More Cards?

Yes! Would like to get them all implemented. I'm currently focused on cards since they are more fun to code. UI and AI improvements will likely happen afterwards.

### You Call That A Deckbuilder?

Yeah it's nasty. I just wanted something that would let people brew a deck. Making a proper builder with filters and such is going to take a minute.

## Game Differences

Certain mechanics found in the original game have been slightly changed for my own sanity.

### Card Versions

The cards have been implemented in what's been dubbed "the wiki version". I believe this is the second-to-last rebalance before the game shuttered, and is what is reflected in the [Solforge Wiki](https://antifandom.com/solforge/wiki/Card_Sets).

I don't even have the details of the final rebalance, but I suspect KaelForge has implemented those specs. Implementing earlier versions may be fun (especially for revisiting older metas), but is currently the lowest of priorities and considered more chore than useful.

### Randomized Batches

Batch resolution is not randomized.

- An example: a 5/5 `Lvl1 Spring Dryad` is on board, `Lvl2 Weirwood Patriarch` is forged.
- In the original game, the effect that triggered first was random. You could end up with a 6/6 Dryad or a 9/9 Dryad.
- In this version, the order will be the same if the initial conditions are the same.
- For the real keeners, actual order somewhat explained [here](rules.md#trigger-resultion-order). In this case there is one event we care about (Creature Enters), and Dryad had to exist first. Thus Dryad will always trigger second, resulting in a 9/9.

### Multiple Card Levelling

When playing `Metasight`, `Perilous Insight`, or `Lvl3 Killion`, once a first card is selected for levelling, it is leveled. You cannot cancel back and re-pick as you can in most multi-select operations.

Similarly, `Discordant Strike` and `Thunderstomp` will apply the first effect and cannot be undone. This is to avoid confusion that the selection was registered, as the same target can be chosen for the second effect.

### Sudden Death

There is currently no "sudden death" mode. If you both die and have the same health in death, you both win 🏆.

### Extra Battles

Rules around extra battles are slightly different. The new general rule is the first battle is the primary battle, and creatures only have a chance to participate in that if they are eligible at the time the button is pressed. Extra battles can only be spent after the primary battle. If a creature has an extra battle and is capable of battling, the battle button will be made available.

- Scenario 1: Play `Lvl2 Master of Elements`, Battle, play `Lvl1 Call the Lightning`, play `Lvl1 Lightning Brand`.
  - In original Solforge, `Master of Elements` would not battle at all.
  - In this version, `Master of Elements` would battle one time after `Lightning Brand` was cast.
- Scenario 2:  Play `Lvl2 Master of Elements`, Battle, play `Lvl1 Lightning Brand`, play `Lvl1 Call the Lightning`.
  - In original Solforge, `Master of Elements` would battle twice after `Call the Lightning` was cast.
  - In this version, `Master of Elements` would battle one time after `Call the Lightning` was cast.

Regarding `Vaerus, Herald of Fury`, a creature receives the extra battle as one would expect (start of turn, Vaerus enters field, or new creature enters field). However, if Vaerus dies prior to the battle being used, the creature retains the extra battle.

### Ator, Thunder Titan

I cannot find what the original behavior was, but `Ator, Thunder Titan` will not apply the `Assault` effect retroactively. Only creatures forged after Ator is on the field will receive his blessings.

### Brightsteel Gargoyle

`Brightsteel Gargoyle` does not change image when in defender mode. The amount of trickery to make this one card act fancy is currently in the "not worth it" pile.

### Darkforged

A number of Darkforged cards had original text claiming they trigger "when a friendly Darkforged enters play" or give benefits "for each friendly Darkforged". This would suggest the creature include themselves in their trigger, as other cards use the phrase "another friendly X" or "other friendly X".

Given how overpowered the Darkforged are, I have added the term "another" or "other" to the following cards. I'm not sure how the cards actually behaved in the original client.

- `Darkroot Shambler`
- `Darkshard Witch`
- `Darksteel Enforcer`
- `Darkstone Asir`
- `Dusk Hammer`
- `Shadeclaw Zombie`
- `Shadowmist Angel`
- `Shroudthorn Splicer` 
- `Umbraskin Yet`

### Grimgaunt Doomrider

The behavior of `Grimgaunt Doomrider` is slighlty different. A dying Doomrider will move to the lane where a friendly creature died. In the original game it would not, but would still apply the debuff in that lane. An example:

- On your board are two Grimgaunt Doomriders and a `Nexus Core`. Your opponent has a `Flamebreak Invoker` opposite your mighty Core.
- It is your opponents turn. They cast `Glacial Crush` on the Core.
- The initial batch following the spell contains events for both casting the spell, and destroying the Core.
- As it is your opponents turn, the first trigger to happen is Flamebreak Invoker reacting to the spell. It deals enough damage to both Doomriders to take their health well below zero (enough that they cannot buff themselves back to 1 health).
- The next triggers are the Doomriders reacting to the death of the Core. While their health indicates they are at the moment dead, they are still in the batch so are not considered officially dead.
- In the original Solforge, neither Doomriders would move, thus leaving the Core's lane unoccupied. However, they would apply apply the debuff to the Invoker opposite the core. Since neither moved, both Doomriders would see the Core's lane as empty, so both will apply the debuff.
- In this version, the first Doomrider to trigger will move to the Core's lane and debuff the Invoker. The second Doomrider will trigger, see the lane as occupied, and do nothing. The Invoker is only debuffed once.
- In both cases, the Doomriders die at the end of the batch.

### Lyria

`Lvl3 Lyria, Muse of Varna` now places creatures all at once, not in sequence. An example: if Lyria brought back four `Lvl1 Spring Dryads`, in the original game you would end up with a 4/4, 5/5, 6/6, and 7/7 set of Dryads. In this edition, you will end up with four 7/7 Dryads.

### Shardplate Behemoth

The original game had a left-to-right rule precedence. From Ximane's advanced rules:

> If a `Shardplate Behemoth` is to the left of an `Alloyin General`, its ability first makes its attack equal to its health, then the General's ability boosts its attack, which gives it 2 more attack than health. If the Behemoth is on the right of the General, the General boosts its attack, and then its attack is set to its health, effectively negating the General's ability.

In this edition, Behemoth's card rule trumps all. The attack will always equal the health. However, if attack buffs are applied to the Behemoth, and then it has abilities removed (e.g., `Wipe Clean` is cast), the buff will remain. So if `Lysian Shard` is cast on a Behemoth, then it is wiped, the resulting dino will have 6 attack, not 0.

### Water Walker

Changed the tribe to `Water Asir`. Because `Ice Asir` made no sense.

### Death and Triggers

Rules regarding creatures who affect other creatures based on event triggers, but die as the events happen. These were unclear in some cases and may be implemented different.

The rules for `Dr. Frankenbaum` and `Yuru, the Necrosage` were documented. Their effects only apply if they were alive, or died at the same time, when the target creature died. The time here is the specific death time, not the death check at the end of a [batch](rules.md#advanced-event-timing).

As such, the following cards are using the same principle: `Tarsus, Deathweaver`, `Uterradon Rex`, `Oreian Justicar`, `Sorrow Harvester`.

An example:
- A player controls `Lvl1 Tarsus` and `Lvl1 Grove Matriarch`. Tarsus is opposing `Lvl1 Vengeful Spirit`, Matriarch is opposing `Lvl1 Swampmoss Lurker`.
- Battle happens. In the combat batch, every creature but Tarsus dies. Tarsus has 2 health remaining. Nothing happens in the combat effects batch.
- In the death effects batch, both Vengeance triggers are resolved.
- If the Spirit trigger resolves first, Tarsus will be dead prior to the Matriarch dropping a `Seedling`. The Seedling will not get buffed by Tarsus.
- If the Matriarch trigger resolves first, Tarsus is still alive and will buff the Seedling. This happens even though the "Creature Enters" event is processed in the next batch, and Tarsus has been marked dead at the end of the death effects batch.

## Wish List

I only captured a subset of information and assets back when the game was live. If you have any of the following and want to donate to help make the game better, please [get in touch](https://github.com/grousewood-games#contact)

- Draft Pool lists of various eras.
- Deck Lists.
  - Various Tournaments (top X decks).
  - ZubjectX's Gimmick Decks (not on [YouTube](https://www.youtube.com/@ZubjectX/about) anymore).
  - Zan's Crazy Deck Shop (was on the original forums).
