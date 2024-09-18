import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.PHFpb8nk.js";const b=JSON.parse('{"title":"Advanced Event Timing","description":"","frontmatter":{},"headers":[],"relativePath":"rules/advanced-event-timing.md","filePath":"rules/advanced-event-timing.md"}'),n={name:"rules/advanced-event-timing.md"},i=r(`<h1 id="advanced-event-timing" tabindex="-1">Advanced Event Timing <a class="header-anchor" href="#advanced-event-timing" aria-label="Permalink to &quot;Advanced Event Timing&quot;">​</a></h1><p>None of the following is required to enjoy the game. However, understanding the advanced quirks can help you determine if certain actions will play out in the order you expect.</p><h2 id="typical-events" tabindex="-1">Typical Events <a class="header-anchor" href="#typical-events" aria-label="Permalink to &quot;Typical Events&quot;">​</a></h2><ul><li>Creatures entering the field, being replaced, being destroyed, or moving.</li><li>Creatures dealing damage, to other creatures or players, direct or battle damage.</li><li>Player playing a card, gaining health.</li><li>Turn based occurrences like starting a turn, ending a turn, gaining a rank.</li><li>Spells can cause a number of the above events.</li></ul><h2 id="normal-batches" tabindex="-1">Normal Batches <a class="header-anchor" href="#normal-batches" aria-label="Permalink to &quot;Normal Batches&quot;">​</a></h2><p>When events happen, they are placed into a &quot;batch&quot;. A batch will start after the effects of a primary action (like playing a card, using a <code>Mobility</code> or <code>Activate</code> effect) have completed, or the previous batch finishes resolving. For example, casting <code>Dreadbolt</code> on a creature will create a batch containing the events Card Played and Creature Destroyed. This batch will not start until the creature is marked as dead, and the card has been leveled into the discard.</p><p>When starting to process a batch, we figure out what will or could be triggered by the events in the batch. Those triggers are then split into three piles:</p><ul><li>Non interactive triggers belonging to the active player.</li><li>Non interactive triggers belonging to the non-active player.</li><li>Interactive triggers belonging to the active player.</li></ul><p>Each pile is then processed in the order above. If any triggers generate new events, they are queued in the next batch. That batch will be processed when the current batch finishes. The order of resolution in each bucket is deterministic, but is tricky to outline with concise rules. See the related entry in the <a href="./../faq/differences.html#randomized-batches">faq</a>, and a more in-depth analysis <a href="#trigger-resolution-order">below</a>.</p><h2 id="death-checking" tabindex="-1">Death Checking <a class="header-anchor" href="#death-checking" aria-label="Permalink to &quot;Death Checking&quot;">​</a></h2><p>Creature and player death is not finalized until the end of the batch. For example, a creature with 1 health, having Poison 2 and Regenerate 2, will be considered alive at the end of the batch processing the Turn Start event.</p><p>This can explain why you may see a creature with negative health during an interactive trigger. The choice you are making takes place inside the batch, so you may have the chance to boost the creature back to life prior to the death check.</p><h2 id="battle-batches" tabindex="-1">Battle Batches <a class="header-anchor" href="#battle-batches" aria-label="Permalink to &quot;Battle Batches&quot;">​</a></h2><p>During battle, the activities are split into three batches. Death is checked at the end of each.</p><ol><li>A batch where all eligible creatures engage in battle. Battle damage is applied to creatures and players.</li><li>A batch to process any combat/damage events from the battle. These apply even if the creature with the ability died in the first batch. E.g. <code>Blight Walker</code> destroys a creature it damaged, even if Blight Walker died in combat.</li><li>A batch to process any death related events from the battle. Again, they apply even if the creature has been dead since the first batch. E.g. <code>Graveborn Glutton</code> killed in combat will perform its Vengeance damage in this batch.</li></ol><p>Any new and unhandled events raised in the second and third batches are processed in a fourth batch, which is a normal batch.</p><h2 id="trigger-resolution-order" tabindex="-1">Trigger Resolution Order <a class="header-anchor" href="#trigger-resolution-order" aria-label="Permalink to &quot;Trigger Resolution Order&quot;">​</a></h2><p>The order in which triggers resolve is deterministic, but can be difficult for a person to track in more complex scenarios. A number of factors influence the order.</p><p><a href="#typical-events">Events</a> cause the triggers to activate, so the order in which events entered the batch matters. This is not obvious since non-interactive and combo&#39;d things happen in order as dictated by the code. Events are processed in a newest-first order.</p><ul><li>For spells, the Card Played event is typically last</li><li>For forging creatures the Card Played event is usually first.</li><li>For creature replacement the replacement event is created before the creature enters event.</li></ul><p>There are other less common permutations that I won&#39;t list out. In our <code>Dreadbolt</code> example <a href="#normal-batches">above</a>, we can determine the Creature Destroyed event entered the batch before the Card Played event.</p><p>The order creatures appeared on the board matters. On the same event, triggers on a newer creature will be processed before an older creature. This can be difficult to track in cases with multiple Spawns.</p><p>The order a creature gains triggers matters, primarily when a creature has two triggers that react to the same event. As an example, if <code>Spiritflame Mystic</code> has <code>Shallow Grave</code> casted on it and then dies later in the turn, will the resurrected Mystic get hit with the original Mystic&#39;s <code>Vengeance</code> effect? Triggers are also processed in a newest-first order, so in this case, yes. The Vengeance trigger was assigned at creature creation, the Shallow Grave trigger was assigned on a subsequent card play.</p><p>Triggers on the player are resolved before triggers on creatures. These include things like <code>Ambush</code> triggers and <code>Echoes</code> spells turn end triggers.</p><p>Remember the three <a href="#normal-batches">batch piles</a> triggers fall into will also influence the order in which things occur.</p><p>The main takeaway is if encountering similar board state, the trigger resolution should be the same. Basic interactions can be predicted, complex cascades of triggers not so much.</p><h2 id="trigger-resolution-algo" tabindex="-1">Trigger Resolution Algo <a class="header-anchor" href="#trigger-resolution-algo" aria-label="Permalink to &quot;Trigger Resolution Algo&quot;">​</a></h2><p>For the real keeners, here is a rough outline of the trigger resolution order. Valid creatures for trigger testing include any active creature, or any creature that was destroyed or replaced in the current chain of batches.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Create an empty trigger reaction list.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For each Event in the batch (newest to oldest)</span></span>
<span class="line"><span>  For both players</span></span>
<span class="line"><span>    Test player triggers (newest to oldest) and add to the reaction list</span></span>
<span class="line"><span>  For each creature (newest to oldest)</span></span>
<span class="line"><span>    Test creature triggers (newest to oldest) and add to the reaction list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Re-arrange the reaction list into three categories</span></span>
<span class="line"><span>  Active player passive, inactive player passive, active player interactive</span></span>
<span class="line"><span>  Otherwise the relative order of the trigger reactions does not change</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Process the trigger reactions in order</span></span></code></pre></div>`,29),s=[i];function o(l,c,h,d,p,g){return t(),a("div",null,s)}const v=e(n,[["render",o]]);export{b as __pageData,v as default};