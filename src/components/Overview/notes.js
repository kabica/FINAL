import React from 'react';
const notes = {

  FORT: {
    DESC: 'Gameplay + Item Changes:',
    DESC1: 'Artwork +  Animation:',
    PATCH1:
    <div>
      GENERAL
      <ul>
        <li>When players’ characters are near a wall, they will lower their weapon while in their idle pose.</li>
        <li>This is to reduce instances in which the hands of players’ characters appear through walls.</li>
      </ul>
      BUG FIXES
    <ul>
      <li>Changed the lace color of the Jets 2019 - 2020 NFL Outfit from white to green</li>
      <li>The Flowerprint wrap no longer appears incorrectly on assault and sniper rifles.</li>
      <li>Damaging a tree no longer places a rock texture on its leaves or changes its wood texture</li>
    </ul>
    </div>,
    PATCH: 
    <ul>
      <li>
        Players impulsed by a Shockwave Grenade will no longer destroy a nearby trap without first destroying the building piece it is attached to.
      </li>
      <li>
        The Zapper Trap’s info card now shows the appropriate 4 stars (indicating Epic Rarity) rather than 2 (indicating Uncommon Rarity).
      </li>
      <li>
        Resolved an issue in which the Zapper Trap would not build properly when thrown on slopes or uneven terrain.
      </li>
      <li>
        B.R.U.T.E.s will now be launched away if they touch the Floating Island’s Cube.
      </li>
      <li>
        The B.R.U.T.E.’s Stomp attacks now deal consistent damage to other vehicles. 
        <ul>
          <li>
            Previously, they would deal either double or triple damage to other vehicles.
          </li>
        </ul>
      </li>
      <li>
        The color of the B.R.U.T.E.’s cooldown meter now updates properly to correspond with the cooldown value.
      </li>
    </ul>
  },
  PUBG: {
    DESC: 'General Gameplay:',
    PATCH: 
    <ul>
      <li>
        Karakin is now available in Custom Matches
      </li>
      <li>
        Updated Esports Mode preset 
        <ul>
          <li>
            The previous 2019 preset has been replaced by the 2020 Global Esports Ruleset
          </li>
          <li>
            Item spawn rates have been changed in accordance to each map’s ruleset.
          </li>
          <li>
            This preset uses the S.U.P.E.R ruleset (Official Esports Ruleset)
          </li>
        </ul>
      </li>
      <li>
        Organized custom match presets and added some new ones.
        <ul>
          <li>
            The First Weapon for Your Chicken Dinner’ preset has been added
          </li>
        </ul>
      </li>
      <li>
        Known Issue: Snowmobiles and Snowbikes don’t spawn on Vikendi
        <ul>
          <li>
            This issue will be resolved in next patch
          </li>
        </ul>
      </li>
    </ul>
  },
  DEST_2: {
    DESC: 'Power Characters:',
    DESC1: 'SPECIALTY CHARACTERS',
    PATCH: 
    <div>
      <div id='patch_category'>TITAN</div>
      <ul>
      <li>
      Barricades now take extra damage from special-ammo weapons, ant-barrier weapons
      </li>
      <li>
      Increased cost of light attack from 11.5% to 12.5% (increased from 3% to 4.5%)
      </li>
      <li>
      Shoulder Charges (Hammer Strike, Seismic Strike, Shield Bash)
      </li>
      <li>
      Lunge auto-targeting angle decreased by 50%
      </li>
      <li>
      Targeted lunge movement distance decreased from 6m to 5.5m
      </li>
      <li>
      Untargeted lunge movement distance increased from 4.5m to 5.5m
      </li>
      </ul>
    </div>,
    PATCH1: 
    <div>
      <div id='patch_category'>HUNTER</div>
      <ul>
      <li>
      Damage remains at 160 when used with Young Ahamkara's Spine exotic
      </li>
      <li>
      Should no longer apply large amounts of knockback to tanky combatants
      </li>
      <li>
      Changed tracking style to reduce the chance of the knife being pulled away from its
      </li>
      <li>
      Fixed an issue in which players in Arcstaff were able to dodge infinitely even after the
      </li>
      </ul>
    </div>,
  },
  BL3: {
    DESC: 'Characters + More:',
    PATCH: 
    <div>
      <div id='patch_category'>VAULT HUNTERS</div>
      <ul>
      <li>
      This week, we took a look at some character skills that were occasionally not properly reporting what was happening in-game. For these instances, we have updated the description text to show the actual in-game values and removed an instance of a penalty that was not reported on its skill description.
      </li>
      <li>
      “Hell on Rails” skill description was occasionally showing +30% Fuel Drain instead of the actual +8%
      </li>
      <li>
      “Corrosive Sabot Round” skill description was occasionally showing -50% Railgun Damage and Fuel Drain instead of the actual -33%
      </li>
      <li>
      Addressed a reported concern that the Gunner’s “Active Tracking” skill was receiving a 50% penalty to damage per missile and ammo capacity that was not listed in the skill description. We have removed this penalty
      </li>
      </ul>
    </div>,
    DESC1: 'Weapons + Gameplay:',
    PATCH1: 
    <div>
      <div id='patch_category'>THE ARSENAL</div>
      <ul>
      <li>
      We are also looking at some of our Legendary weapons to get them up to par as part of the impending release of Mayhem 2.0, one of the Spring 2020 content additions we discussed at PAX East.
      </li>
      <li>
      Addressed a reported concern that Moist Hand Luke and Grabby Gretchen would occasionally spawn inside of the wall during “Playing with Fire”
      </li>
      <li>
      Addressed a reported concern where characters could sometimes get stuck between a Ratch nest and a tree near the beginning of the Market District
      </li>
      <li>
      Addressed a reported concern that players were sometimes able to escape the boss arena during the Trial of Cunning
      </li>
      </ul>
    </div>
  },
  APEX: {
    DESC: 'Weapons Fix + Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>SYSTEM OVERRIDE</div>
      <ul>
      <li>
      Deja Loot is a unique take on the Apex games where “random” is a dirty word. A glitch in the system has caused all loot to spawn in the same location every match for the duration of the event. 
      </li>
      <li>
      Even the plane path and circle locations will be fixed for this mode, which will change on a daily basis while the loot location stays the same for the whole event.
      </li>
      <li>
      When you pick up Evo Shield it will start out weaker than a Common Body Shield (White), but as you do damage to non-downed players throughout the match it can become even stronger than Epic Body Shields (Purple). 
      </li>
      <li>
      Evo Shields change color as they progress, but their perpetual distinctive glow will help you identify them. Progress also carries over from person to person, so look forward to some interesting late game scenarios.
      </li>
      </ul>
    </div>,
    DESC1: 'General Bug Fix:',
    PATCH1: 
    <div>
      <div id='patch_category'>BANGALORE + MORE:</div>
      <ul>
      <li>
      Fixed bug for cases where Bangalore would appear invisible when equipped with certain skins. The Apex Overdrive and Killer B skins have been re-enabled now for affected players. 
      </li>
      <li>
      For cases where sometimes Revenant’s Ultimate Totem could be destroyed or disabled when placed too close to some geometry, it will now be refunded back to the player at full charge when this happens.
      </li>
      <li>
      Fixed a bug for where sometimes players would enter a match with a different character than they selected, and all loadouts being set back to default after the match. 
      </li>
      <li>
      Fixed a bug for cases where unlocking new badges would not trigger the red dot notification to make players aware a new badge is available.
      </li>
      </ul>
    </div>
  },
  DOTA: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>DATA + MORE:</div>
      <ul>
      <li>
      In this update we are introducing a new system for gathering data on the type of changes that are harder to evaluate or predict without very large number of games, such as gold bounty formula changes.
      </li>
      <li>
      We expect the number of times that we actually do this during the year to be very low, however when we do it it'll be during weekdays only at the lowest point of user activity, between 4 and 6PM Seattle time. In addition,we are adding a convar "dota_disable_experimental_gameplay" that can be used by players to disable it. Any gameplay changes will only be active in matchmaking games where no players have the convar set. The changes will never be active in lobby and league games.
      </li>
      <li>
      Although the type of changes we are thinking about, like gold distribution, take much more than a game or two to show their full impact, we will still be able to get meaningful data and analysis on the direction and scale of changes.
      </li>
      </ul>
    </div>,
    DESC1: 'General Bug Fix:',
    PATCH1: 
    <div>
      <div id='patch_category'>META BALANCE:</div>
      <ul>
      <li>
      Fixed a bug with combining Bloodstone or Rapier when some components were in your backpack. When selling stacked wards both sentry and observer wards now restock correctly.
      </li>
      <li>
      Fixed the interaction of backdoor protection and Lone Druid's Bear and Brewmaster's Primal Split. Fixed a bug where a gem stolen from the enemy team would credit the wrong player with bounty for wards killed.
      </li>
      <li>
      Fixed the interaction of Lone Druid's Spirit Bear and Magic Lamp. Dark Seer's Surge and Legion Commander's Press the Attack with the AoE talents will no longer cause the caster to pivot when self-casting.
      </li>
      <li>
      We are making our smurf detection system more sensitive in this update. This change will much more proactively target potential smurf accounts, but may on rare occasion give a normal player extra MMR.
      </li>
      </ul>
    </div>
  },
  ROCKET: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>CONTROLLER SETTINGS:</div>
      <ul>
      <li>
      Changed how controller vibration is set under Options -> Controls. Added three Controller Vibration settings: ‘Disabled’ removes all controller vibration, ‘Default’ only vibrates on impacts, boost activation, and explosions and ‘All’ adds vibration for the entire duration of a boost
      </li>
      <li>
      Added a ‘Vibration Intensity’ slider: Slider can move between 0.00 and 3.00 in intervals of 0.10, Setting the slider to 0.00 disables vibration and Intensity settings below 0.5 may have inconsistent results across different controller types due to variance in vibration motors
      </li>
      </ul>
    </div>,
    DESC1: 'General Bug Fix:',
    PATCH1: 
    <div>
      <div id='patch_category'>VISUAL DETAILS:</div>
      <ul>
      <li>
      Fixed appearance of several Decals, fixed an issue causing some maps to not appear in Online Matches since v1.74, fixed Boost mutator in Spike Rush matches and [Steam, Nintendo Switch] Players can now send more than three messages during a Private or Wireless Match (where applicable) when the match is paused
      </li>
      </ul>
    </div>
  },
  R6: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>OREGON REWORK:</div>
      <ul>
      <li>
      With an updated look, most areas are more open and structured, but there are also new points of access and rotation. Big Tower now also connects directly to Kitchen on the first floor thanks to the Kitchen Corridor, and a new area in the basement called Freezer leads to the first floor with the Freezer Stairs.
      </li>
      <li>
      Other access point changes include the removal of the door between Kitchen and Bathroom Corridor (now called Security Corridor), as well as the one leading into Dining Hall from the outside, which is replaced by a connection between Dining Hall and Small Tower. Attic has also changed, opening into Dorm Main Hall with a doorway, but losing its ladder down to Meeting Hall.
      </li>
      <li>
      There are a few more things to take note of when learning the ins and outs of this new iteration, but most notably: the Tower bomb site has been replaced with the new Meeting Hall and Kitchen alternative.
      </li>
      </ul>
    </div>,
    DESC1: 'Meta Balance + Shift:',
    PATCH1: 
    <div>
      <div id='patch_category'>PLAYER CHANGES:</div>
      <ul>
      <li>
      Lesion was in need of some balancing, and with Operation Void Edge he gets just that. He will no longer be able to see his GU Mines through obstructions of any kind, or from a certain distance. Most importantly, though, when an opposing Operator steps on a GU, there will no longer be any initial damage, giving them time to take it out before it becomes a problem. However, we have increased each tick’s damage from 4 to 6. Finally, downed operators will not take any damage anymore from Gu Mines, triggering them to no effect.
      </li>
      <li>
      Twitch is also getting some changes. Her Shock Drone will now start with three shots, but it will have a cooldown system similar to Echo’s Yokai drone. Its firing power has also been reduced to 1 point of damage. All this serves to turn Twitch’s focus to Defenders’ utility, while keeping her drone relevant over the duration of the round.
      </li>
      <li>
      There are a few more things to take note of when learning the ins and outs of this new iteration, but most notably: the Tower bomb site has been replaced with the new Meeting Hall and Kitchen alternative.
      </li>
      </ul>
    </div>
  },
  OW: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>SHARE PLAY:</div>
      <ul>
      <li>
      Players can now share their in-game replays with others! A replay is shared via an alphanumeric code typically 6 characters long. The code can be shared however you want: in game, on forums, over social media. Another player can input that code and watch your replay.
      </li>
      <li>
      The replay system has also received several improvements: Pin up to 10 replays to keep until the next patch. Unpin a replay to make room for a different replay. The 10 most recently imported replay codes are tracked. This allows you to watch the same imported replay.
      </li>
      <li>
      In the Assault, Payload, and Hybrid game modes for Competitive Play, when both teams complete a round of offense and have more than 2 minutes of time bank then each team’s time bank is equally reduced until one of the teams has a 2 minutes remaining
      </li>
      </ul>
    </div>,
    DESC1: 'General Bug Fix:',
    PATCH1: 
    <div>
      <div id='patch_category'>WORKSHOP: </div>
      <ul>
      <li>
      Fixed an issue causing Player Joined Message to trigger multiple times when a player joined the match
      </li>
      <li>
      Fixed an issue preventing Set Team Score/Modify Team Score from working in Assault, Hybrid, and Payload
      </li>
      <li>
      Fixed an issue causing the editor to eat the last character of a unicode string when pasting in text
      </li>
      <li>
      Fixed an issue preventing "Is Firing Primary" from returning true when Doomfist shoots his last bullet
      </li>
      <li>
      Renamed "Spectators" to "Non-Team Spectators" in Create HUD Text and Create In-World Text for clarity
      </li>
      <li>
      Fixed an issue preventing the Non-Team Spectators option from working properly in Create HUD Text and Create In-World Text
      </li>
      </ul>
    </div>
  },
  BF1: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>ZEEBRUGGE: </div>
      <ul>
      <li>
      The goal here is to help the Attackers during the first sector as much as possible. The remaining sectors look pretty good from a sector loss perspective, making the first sector easier should help Attackers build some momentum.
      </li>
      <li>
      Sector 1 has had its bounds adjusted to prevent Defender access to the lighthouse; the Attacker HQ now includes the lighthouse and part of the mole.
      </li>
      <li>
      The Attacker Elite Infiltrator kit has been moved into the lighthouse base. A Flame Trooper has been added there as well, to allow for Attackers to more aggressively push and hold flags in the first sector.
      </li>
      <li>
      Defenders now only get their second plane when the Attackers reach sector 3, as opposed to sector 2. Defenders can no longer use boats in Sector 4 to harass Attackers.
      </li>
      </ul>
    </div>,
    DESC1: 'Match Experience:',
    PATCH1: 
    <div>
      <div id='patch_category'>ALL PLATFORMS: </div>
      <ul>
      <li>
      Improved loading times going into the soldier customization screen and reduced occurrence of disconnects when trying to join a server.
      </li>
      <li>
      Fixed an issue with map vote results not being respected, if an RSP map rotation changed whilst in progress.
      </li>
      <li>
      Reinforced the result of the map vote when the game server is migrating to a different host due to maintenance.
      </li>
      <li>
      Fixed an issue where players in a queue were blocked from joining a match, behind a player that was waiting for a space to open on a specific team (as a result of join on party or friend).
      </li>
      </ul>
    </div>
  },
  LoL: {
    DESC: 'Match Experience',
    PATCH: 
    <div>
      <div id='patch_category'>AUTOFILL BALANCE: </div>
      <ul>
      <li>
      The Solo/Duo queue matchmaking system will now be less likely to create games where teams do not have the same number of autofilled players.
      </li>
      <li>
      It's no secret that having an autofilled player (or two) on your team while your opponents are all on their primary position feels rough. With this change, we're letting matches wait a little longer to try and put an autofilled player on both sides of the match (or, when possible, not autofill anyone). While we can't just get rid of autofill without making queue times skyrocket, this change should help make games with an autofilled player feel as fair as possible.
      </li>
      </ul>
    </div>,
    DESC1: 'Hero Rework + More:',
    PATCH1: 
    <div>
      <div id='patch_category'>SUPPORT SENNA: </div>
      <ul>
      <li>
      PASSIVE - ABSOLUTION - ATTACK DAMAGE PER SOUL 1 ⇒ 0.75, INNATE - WEAKENED SOUL COOLDOWN 4 seconds ⇒ 6/5/4 (levels 1/6/11) seconds
      </li>
      <li>
      Support Senna is currently too strong, especially when she's paired with defensive tank champions. We're decreasing the value of Souls as well as their cadence so she can't just constantly harass her lane opponents—something she gets to do much more frequently when she has a tank to protect her.
      </li>
      </ul>
    </div>
  },
  COD: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>BUG FIXES: </div>
      <ul>
      <li>
      Players seeing a rank reset prompt screen after yesterday's update. Fix for the Quick Fix Perk not functioning as intended while used as a Specialist Perk. Fix for killstreaks still functioning in CDL playlists. Fixes for Regiment invites
      </li>
      <li>
      Fix for Regiment tags not appearing as intended. Fix for players receiving the "Jockworth" error while in Gunfight Tournaments. Fix for a bug where numbers on the team roster and numbers on the COD Caster minimap did not correspond. Pointman: Fix for an issue where Killchain scores were being given for killstreak kills without having Killchain equipped
      </li>
      </ul>
    </div>,
    DESC1: '',
    PATCH1:''
  },
  FALL: {
    DESC: 'Match Experience',
    PATCH: 
    <div>
      <div id='patch_category'>AUTOFILL BALANCE: </div>
      <ul>
      <li>
      The Solo/Duo queue matchmaking system will now be less likely to create games where teams do not have the same number of autofilled players.
      </li>
      <li>
      It's no secret that having an autofilled player (or two) on your team while your opponents are all on their primary position feels rough. With this change, we're letting matches wait a little longer to try and put an autofilled player on both sides of the match (or, when possible, not autofill anyone). While we can't just get rid of autofill without making queue times skyrocket, this change should help make games with an autofilled player feel as fair as possible.
      </li>
      </ul>
    </div>,
    DESC1: 'Hero Rework + More:',
    PATCH1: 
    <div>
      <div id='patch_category'>Support Senna: </div>
      <ul>
      <li>
      PASSIVE - ABSOLUTION - ATTACK DAMAGE PER SOUL 1 ⇒ 0.75, INNATE - WEAKENED SOUL COOLDOWN 4 seconds ⇒ 6/5/4 (levels 1/6/11) seconds
      </li>
      <li>
      Support Senna is currently too strong, especially when she's paired with defensive tank champions. We're decreasing the value of Souls as well as their cadence so she can't just constantly harass her lane opponents—something she gets to do much more frequently when she has a tank to protect her.
      </li>
      </ul>
    </div>
  },
  MINE: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>Bug Fixes + More: </div>
      <ul>
      <li>
      Players seeing a rank reset prompt screen after yesterday's update. Fix for the Quick Fix Perk not functioning as intended while used as a Specialist Perk. Fix for killstreaks still functioning in CDL playlists. Fixes for Regiment invites
      </li>
      <li>
      Fix for Regiment tags not appearing as intended. Fix for players receiving the "Jockworth" error while in Gunfight Tournaments. Fix for a bug where numbers on the team roster and numbers on the COD Caster minimap did not correspond. Pointman: Fix for an issue where Killchain scores were being given for killstreak kills without having Killchain equipped
      </li>
      </ul>
    </div>,
    DESC1: '',
    PATCH1:''
  },
  DIV2: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>Seasonal Levels: </div>
      <ul>
      <li>
       100 levels are available to earn throughout the season, yielding increased rewards as you progress through the ranks including gear, cosmetic items as well as new gear sets and a unique exotic. Each season, an optional Season Pass* is available in the in-game store, granting additional cosmetics and opportunities for season gear as you progress. The Season 1 – Shadow Tide Season Pass is free for all Warlords of New York owners. Remember, all in-game activities granting XP will also count towards your Seasonal Level progression, ensuring that you can progress at your own pace and through playing your favorite content.
      </li>
      <li>
      Throughout the season, five seasonal manhunt targets will become available. A new target unlocks every 3 weeks and is accompanied by a double XP event, providing an opportunity to progress quicker. Take down all four Lieutenants to unlock the Prime Target. Once the Prime Target is dealt with, you will unlock the unique skill variant, EMP Sticky Bomb.
      </li>
      </ul>
    </div>,
    DESC1: 'Event Rework + More:',
    PATCH1: 
    <div>
      <div id='patch_category'>Global Events: </div>
      <ul>
      <li>
      Global Events are one-week time limited in-game events, allowing you to activate gameplay-altering modifiers. The Global Event modifiers will have you adjust your tactics, offering you new ways to experience Tom Clancy’s The Division 2. Three Global Events will become available this season and participating in the each event yields up to 10 rewards based on your performance.
      </li>
      <li>
      In Season 1, the Urban Jungle apparel event will become available from March 31 to April 20, earn or purchase keys with Premium Credits to obtain new apparel.Prove your status as an agent by rising through the ranks, competing with other players in various in-game activities to rank up and earn rewards. Season 1 contains four Leagues, each lasting 2 weeks and yielding up to 10 rewards based on your performance.
      </li>
      </ul>
    </div>
  },
  SPLIT: {
    DESC: 'General Gameplay:',
    PATCH: 
    <div>
      <div id='patch_category'>Hot Fixes: </div>
      <ul>
      <li>
      After a game is completed, players will see a new Post Game UI screen, which will contain various stats with medals to indicate how you did compared to the other players on your team. Players will then be auto queued into another match. Fixed bug where plasma rifle wouldn’t cooldown if you fired or closed a portal after it overheated
      </li>
      <li>
      Fixed bug where portal/suicide kills didn’t play kill sound or show damage done. Fixed bug where unlinked portals would sometimes keep flashing and playing audio. Fixed bug where Domination Indicators wouldn’t appear if you join a game in progress. Fixed bug where players in Waiting Area would appear as your teammate. Fixed bug where kill/assist message would sometimes show 0 damage done
      </li>
      </ul>
    </div>,
    DESC1: '',
    PATCH1: ''
  }
  
}

export default notes;