# Rules

A good chunk of this was influenced (or outright lifted) from the [Solforge Wiki](https://antifandom.com/solforge/wiki/How_to_Play), primarily written by [Vandergus](https://vandergusdrafting.tumblr.com/), [Djurre](https://www.reddit.com/user/Djurre1980/), and [RavenBlackFeather](https://solforge.fandom.com/wiki/User:RavenBlackFeather). There was a second document I had in my possession giving an overview of game mechanics, which I'm also sourcing from. I have no idea who wrote it, googling quotes has been hitless. If you think it's you, let me know, happy to credit.

Given the current state of the UI, if you never played the original game, watching some short [tutorials on Youtube](https://www.youtube.com/watch?v=i9YqvljwxIQ) may go a long way to having a confusion free first experience.

## Contents

- [Game Overview](#game-overview)
- [Game Interface](#game-interface)
- [Turn Structure](#turn-structure)
- [Playing Cards](#playing-cards)
- [Battle](#battle)
- [Card Leveling](#card-leveling)
- [Deck Rules](#deck-rules)
- [Creature Attributes](#creature-attributes)
- [Creature Abilities](#creature-abilities)
- [Factions](#factions)
- [Advanced Event Timing](#advanced-event-timing)

## Game Overview

> _"Where two enter, and ones leaves beaten, battered, and bruised"_ -- Tiny Grimes

Each player begins with a deck of 30 cards and a starting life total of 120 health.

At the start of each turn you can generally play two cards. These are notated by blue card symbols on the right side of the screen. On the very first turn, the player can only play one card. Some cards will grant additional plays. Other cards may grant free plays of a specific type of card (notated by green card symbols). Some cards are labelled `Free` and can be played willy-nilly.

Creature cards `Forge` a creature to one of your lanes on the board. Spell cards will present specific targets for their effects. The cards you play will get [leveled up](#card-leveling) into your discard pile.

There is also a [battle phase](#battle) during each turn, where every eligible creature (friendly and enemy) will attack.

At the end of the turn, the remaining cards in hand get discarded (without being leveled). You then draw five new cards.

The opposing player will then take their turn.

Every four turns, a `Rank Up` happens. Your discard pile is put back into your deck and is reshuffled, allowing you to draw your leveled up cards.

The primary goal of the game is to reduce your opponent's health to 0 (or below) by dealing damage with your creatures and spells. The secondary goal is to have a good time.

## Game Interface

### Main Game

Available choices will be highlighted in green rectangles, or be presented on the red button in the middle-right of the board. Left click your mouse over what your heart desires. A red rectangle indicates you can Cancel the current action.

Any card can be right clicked to [view the details](#card-details-view) -- the card text and all levels for the card.

The player icons on the right indicate health levels, the current [rank](#end-of-turn), and the turn within the rank.

The field consists of the 5x2 grid of squares. Your lanes are on the bottom, your opponents are on the top.

Below the field are the cards in your hand. If you have more than five cards in hand, arrows will appear under your player to scroll the view.

For creatures that have both an `Activate` and `Mobility` action available, clicking the creature will start the Mobility action, but the Activate choice will be presented on the main button (cancelling the Mobility request).

When the AI is playing, none of the click actions will work (including right clicks to view card data and hand scroller arrows).

### Touch Screen Support

Tapping the ℹ️ icon in the lower right will switch to card details mode. Now any tap on a card will show the card details. To get back to the normal "action" mode, tap the 👆 icon in the lower right.

To temporarily view card details without changing modes, touch and hold a card for one second.

### Card Details View

This shows all the information for a card.

Use the level icons in the lower left to view different card levels. If the card has related cards, buttons will be presented on the lower right to switch the view to those cards. When viewing a related card, a `Back` button will appear to return to the previous card.

The card details view can be dismissed by clicking the `Close` button, or clicking anywhere on the card image.

### Constructed Screen

The initial screen provides options to configure the Constructed match.

- The Opponent options determine who controls the second player.
  - `Dumb Bot` will engage the whip-smart AI to counter your every strategy.
  - `Human` will allow the user play both turns. Great for parties.
- The Player options determine what deck will be used in the game for each side.
  - `Pre-Con` will allow you to choose a pre-made deck (selected in another screen).
  - `Random` will choose a random pre-constructed deck.
  - `Scramble` will pick a deck of 30 unique cards. A true dogs breakfast!
  - `Load File` will let you load a deck file you created in the deck builder.
- The `Next` button will accept the choices and continue.

If either player selected the `Pre-Con` option, a screen will be presented to select the deck. The top left will indicate which player is currently picking.

- The list on the left represents collections of decks. Clicking one will show individual decks on the right.
- Clicking an individual deck will select that deck. There is currently no UI to inspect the deck contents, so enjoy the surprise.

### Draft Screen

The initial screen provides options to configure the Draft match.

- The Opponent options determine who controls the second player.
  - `Dumb Bot` will engage the jovial and witty AI to be your gaming pal.
  - `Human` will allow the user play both turns. No excuses for losing.
- The Rarity Filter will let you exclude card rarities from the draftable cards. Useful to mix things up. Standard draft should have all rarities selected.
- Draft Modes will tweak the rules for an alternate draft experience.
  - `Good Packs` will cause the draft packs to have better odds of containing cards of a higher rarity.
  - `Legendary` means first pack in the draft contains six Legendary cards.
  - `Overdraft` has both players select 60 cards for enhanced stupidity.
- The Sets selector will restrict which card sets are included in the draft.
- The `Next` button will accept the choices and continue.

Each human player will then draft cards in the drafting screen. The top left will indicate which player is currently picking.

- A set of two to six cards will be presented on the left. Select the card you want for your deck.
- Cards selected will be displayed on the right. Card names in this list can be clicked to view card details as well.

The game will start after 30 cards have been picked.

### Extras Screen

The following game modes are available to enhance your fun:

- `Big Health`: Players have a higher starting health, allowing time for stupider combos to happen.
- `Cheater`: If you play too good, the AI will cheat.
- `Battle Bark`: Lets you turn on or off the battle sound.
- `90% Size`: Will shrink the UI by 10%. Useful to make the app fit on tablets with `4:3` aspect ratio.
- `Big Cards`: Shows larger card images when viewing the card details. Turning off will reduce the amount of data requested by the game. 

## Turn Structure

### Beginning of Turn

- Effects that trigger at the beginning of a turn happen.
- Any sleeping creatures the active player controls will become awake.
- `Poison` and `Regenerate` amounts are applied to all creatures.
- `Armor` damage capacity values are reset.

### Main Phase

A player may do things in any order:

- Play a card.
- Battle.
- Move an awake creature that has `Mobility`.
- Use an awake creature's `Activate` ability.

The Battle action is mandatory. All other choices are optional.

### End of Turn

- Discard the remaining cards in your hand and draw five cards.
- If it is the fourth turn of the rank, your discard pile is shuffled into your deck.
- Effects that trigger at the end of turn or when you rank up happen.
- Effects that last until the end of turn wear off.

## Playing Cards

Playing a creature card from your hand is called `Forging`. The creature can enter an empty lane, or replace one of your existing creatures. A replaced creature is gone, but is not considered to have been `Destroyed`.

Playing a spell is similar, but the steps involved will vary from spell to spell. Be sure to right click to read the card text.

You can also discard a card directly to the discard pile, leveling it. Your opponent will not know what you leveled. This will count as playing a card. Cards marked as `Free` or that can only be played from a free card effect (green card icon) cannot be directly leveled. They must be played or discarded as normal at the end of the turn.

## Battle

Fight!

The main board is known as the field. The field has five lanes with spaces for each player. Creatures always battle an opposing creature in the same lane, or deal their battle damage to the opposing player if there is no creature opposite them. There can be at most one creature in each lane. 

When you play a creature, it will be sleeping, indicated by the solforge ring over the card. Sleeping creatures cannot attack, use `Activate` abilities or change lanes with `Mobility`. However they will fight back if another creature engages them in battle.

During the battle, opposing creatures will deal damage to each other based on their attack values as long as at least one of the creatures is on the offensive. Two non-offensive creatures in the same lane will not fight. Creatures are destroyed when their health is at or below zero. If an attacking creature is unopposed, it will deal its damage on the opposing player.

A battle happens every turn.

## Card Leveling

Cards have multiple levels. At the start of a game, all of the cards in your deck are at level 1. When you play or directly discard a card, the next level of the card is put into your discard pile. At `Rank Up` you reshuffle your deck, allowing you to draw your higher level cards.

A card at its highest level will not level further, but will still go into your discard retaining its current level.

Some cards have effects that allow you to level additional cards from your hand.

## Deck Rules

### Constructed

A constructed deck has 30 cards. It can have at most two [factions](#factions). It can have at most three copies of a specific card.

### Draft

A draft deck has the same rules as constructed, except there is no limit to the number of copies of a specific card. While highly unlikely, it is statistically possible to draft a deck that has 30 copies of the same card.

## Creature Attributes

`Aggressive`: The creature is always on the offensive. It will battle the turn it is `Forged`, and will have `Mobility` and `Activate` effects available that turn as well. A sleeping aggressive creature is considered to not be asleep. However if it loses aggressive before it naturally awakens, it becomes asleep again.

`Armor X`: Prevents the first X damage dealt to the creature each turn. Armor will not protect against spells and abilities that lower a creatures health.

`Breakthrough`: When the creature is on the offensive, battle damage that exceeds the opposing creature's health is dealt to the opponent.

`Defender`: The creature does not start battle, even if it awake. It is considered non-offensive from a battle perspective, but can use `Mobility` and `Activate` abilities when awake.

`Mobility X`: When awake, the creature may move up to X spaces into an available lane. It may move over creatures between it and the destination.

`Poison X`: The creature is dealt X damage at the start of each turn.

`Regenerate X`: The creature heals X health at the beginning of each turn. Regeneration is always applied after any Poison damage is inflicted.

## Creature Abilities

Unless noted, these abilities are resolved in batches. See the [advanced event timing rules](#advanced-event-timing) for more depth.

### Keyword Abilities

`Forge`: This ability will only happen if the creature card is played from your hand. A creature with a Forge ability will do nothing if it is brought to the board via a different effect.

`Activate`: An ability that can be triggered at the players choosing. Some activations have conditions that must be met first.

`Allied`: The keyword is followed by a faction. It is like Forge, but also requires a card of the listed faction is in your hand.

`Ambush`: If a card with Ambush is in hand, and the conditions are met during an opponent's turn, the card will Spawn a creature.

`Assault`: This ability will only happen if the creature was Forged into a lane with no opposing creature.

`Banish`: A card that is Banished is removed from the game.

`Consistent`: A Consistent card is guaranteed to be shuffled into the first 20 cards of your draw deck. This means you will draw it in one of the four turns of the current Rank.

`Flank`: An ability that happens when the creature moves to a different lane, via Mobility or other effects.

`Gain Rank`: This ability will happen at the end of the players fourth turn in the current rank.

`Heal`: In the context of healing a creature, and damage will be restored up to but not above that creatures maximum health. This is different from "gets +X health", which can raise the maximum health.

`Negate`: The keyword is followed by an attribute. The target creature will lose that attribute, and cannot regain that attribute.

`Overload`: When played, a card with Overload is not placed in the discard pile, but is removed from the game.

`Replace`: The target creature will be replaced with a new creature. The target is not considered to have died. Forging on top of an existing creature counts as a Replace.

`Solbind`: If a card with Solbind is included in your deck, any cards listed after the Solbind keyword are inserted into your deck at the start of the game.

`Spawn`: Will create a new creature in a randomly chosen empty lane. If all lanes are occupied, nothing will happen.

`Upgrade`: This ability will happen if the creature Replaced another creature.

`Vengeance`: This ability will happen when the creature dies or is destroyed.

### Non-Keyword Abilities

`When X`: Like the above abilities, but with a specific condition to trigger.

`While X`: These abilities are applied or removed the moment the stated conditions are met. It does not wait for batch resolution. 

### Lanes

`Adjacent Lane`: The lane directly to the left and right of a creature.

`Center Lane`: The middle lane of the field. Lane 3.

`Side Lane`: Rightmost or leftmost lane on the field. Lane 1 & 5.

`Empty/Available Lane`: A lane with no creature in it.

### Abilities in Future Sets

`Formation`: _introduced in Set 7_

`Raid`: _introduced in Set 7_

## Factions

### Alloyin

Robots, technologists, oracles, and crafty gnomes.

- Boosting attack
- Lowering enemy attack
- Removal of creature abilities
- Armor and Armor based effects
- Middle lane effects
- Card leveling
- Drawing extra cards to your hand
- Granting Defender
- Robot synergies
- Metamind synergies

### Nekrium

Necromancers, the undead, abominations, and slimy oozes.

- Lowering attack and health
- Destroying creatures / direct removal
- Benefiting from enemies with low attack
- Regeneration
- Sacrificing creatures and benefiting from death in general
- Creating token creatures on death
- Resurrecting dead creatures
- Side lane effects
- Abomination synergies
- Zombie synergies

### Tempys

Asirs, elementals, giants, and smelly yetis.

- Temporary attack boost
- Boosting creature health
- Dealing direct damage
- Aggressive creatures and granting Aggressive
- Gaining free spells
- Granting, removing, and exploiting Defender
- Lane movement tricks, effects when creatures move
- Effects when dealing battle damage to the enemy player
- Getting extra battles
- Yeti synergies
- Spell synergies

### Uterra

Dinosaurs, druids, forest creatures, and very angry plants.

- Boosting attack and health
- Benefits from having all lanes occupied
- Generating token creatures
- Having and granting Breakthrough
- Inflicting Poison
- Healing the player, benefiting from the player gaining health
- Plant synergies
- Dinosaur synergies

## Advanced Event Timing

None of the following is required to enjoy the game. However understanding the advanced quirks can help you determine if a certain actions will play out in the order you expect.

### Typicial Events

- Creatures entering the field, being replaced, being destroyed, or moving.
- Creatures dealing damage, to other creatures or players, direct or battle damage.
- Player playing a card, gaining health.
- Turn based occurances like starting a turn, ending a turn, gaining a rank.
- Spells can cause a number of the above events.

### Normal Batches

When events happen, they are placed into a "batch". A batch will start after the effects of a primary action (like playing a card, using a `Mobility` or `Activate` effect) have completed, or the previous batch finishes resolving. For example, casting `Dreadbolt` on a creature will create a batch containing the events Card Played and Creature Destroyed. This batch will not start until the creature is marked as dead, and the card has been leveled into the discard.

When starting to process a batch, we figure out what will or could be triggered by the events in the batch. Those triggers are then split into three piles:

- Non interactive triggers belonging to the active player.
- Non interactive triggers belonging to the non-active player.
- Interactive triggers belonging to the active player.

Each pile is then processed in the order above. If any triggers generate new events, they are queued in the next batch. That batch will be processed when the current batch finishes. The order of resolution in each bucket is deterministic, but is tricky to outline with concise rules. See the related entry in the [faq](faq.md#differences), and a more in-depth analysis [below](#trigger-resultion-order).

### Death Checking

Creature and player death is not finalized until the end of the batch. For example, a creature with 1 health, having Poison 2 and Regenerate 2, will be considered alive at the end of the batch processing the Turn Start event.

This can explain why you may see a creature with negative health during an interactive trigger. The choice you are making takes place inside the batch, so you may have the chance to boost the creature back to life prior to the death check.

### Battle Batches

During battle, the activities are split into three batches. Death is checked at the end of each.

1. A batch where all eligible creatures engage in battle. Battle damage is applied to creatures and players.
2. A batch to process any combat/damage events from the battle. These apply even if the creature with the ability died in the first batch. E.g. `Blight Walker` destroys a creature it damaged, even if Blight Walker died in combat.
3. A batch to process any death related events from the battle. Again, they apply even if the creature has been dead since the first batch. E.g. `Graveborn Glutton` killed in combat will perform its Vengeance damage in this batch.

Any new and unhandled events raised in the second and third batches are processed in a fourth batch, which is a normal batch.

### Trigger Resultion Order

The order in which triggers resolve is deterministic, but can be difficult for a person to track in more complex scenarios. A number of factors influence the order.

[Events](#typicial-events) cause the triggers to activate, so the order in which events entered the batch matters. This is not obvious since non-interactive and combo'd things happen in order dicated by the code. Events are processed in a newest-first order. 

- For spells, the Card Played event is typically last
- For forging creatures the Card Played event is usually first. 
- For creature replacement the replacement event is created before the creature enters event.

There are other less common permutations that I won't list out. In our `Dreadbolt` example [above](#normal-batches), we can determine the Creature Destroyed event entered the batch before the Card Played event.

The order creatures appeared on the board matters. On the same event, triggers on a newer creature will be processed before an older creature. This can be difficult to track in cases with multiple Spawns.

The order a creature gains triggers matters, primarily when a creature has two triggers that react to the same event. As an example, if `Spiritflame Mystic` has `Shallow Grave` casted on it and then dies later in the turn, will the resurrected Mystic get hit with the original Mystic's `Vengeance` effect? Triggers are also processed in a newest-first order, so in this case, yes. The Vengeance trigger was assigned at creature creation, the Shallow Grave trigger was assigned on a subsequent card play.

Triggers on the player are resolved before triggers on creatures. These include things like `Ambush` triggers and `Echoes` spells turn end triggers.

Remember the three [batch piles](#normal-batches) triggers fall into will also influence the order in which things occur.

The main takeaway is if encountering similar board state, the trigger resolution should be the same. Basic interactions can be predicted, complex cascades of triggers not so much.

### Trigger Resolution Algo

For the real keeners, here is a rough outline of the trigger resolution order. Valid creatures for trigger testing include any active creature, or any creature that was destroyed or replaced in the current chain of batches.

```text
Create an empty trigger reaction list.

For each Event in the batch (newest to oldest)
  For both players
    Test player triggers (newest to oldest) and add to the reaction list
  For each creature (newest to oldest)
    Test creature triggers (newest to oldest) and add to the reaction list

Re-arrange the reaction list into three categories
  Active player passive, inactive player passive, active player interactive
  Otherwise the relative order of the trigger reactions does not change

Process the trigger reactions in order
```
