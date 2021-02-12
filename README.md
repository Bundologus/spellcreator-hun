# spellcreator-hun

Localized Hungarian version of the [5th Edition Spellbook spell creator](http://www.5th-spellbook.com/spell-creator.html) for my D&amp;D players,
with some minor extensions.
Also, a project to learn express.js through.

# Credits and Acknowledgement

This is only meant to be an extension tool to use with the Android app [5th Edition Spellbook](https://play.google.com/store/apps/details?id=com.spellsdd5&hl=en&gl=US).
I encourage you to buy and download the app, it has been extremely useful for my group.

# Added Features (Plans)

## Optional Authentication

I want to add authentication to the site for two main reasons:

-   to enable users to filter for the spells they created
-   to enable the creation of campaign groups, where the DM can review spells submitted by the players. Approved spells will be available to the whole group.

## Authorization Concept

### Registered client: **User**

-   Private spells
-   Modify previously created private spells
-   Download own spells in bulk
-   Create campaign group
-   Join campaign group
-   Administrate owned campaing groups

### Unregistered client: **Guest**

-   Create public spells
-   Download public spells

## Campaign Groups

Each user should be able to create a campaign group (CG) to which other users may join (via invite link).
The DM should be able to turn off the possibility of joining the CG, and should be able to kick players.
CG participants should be able to submit spells to the CG, which are reviewed by the DM (the DM can turn off the review process, i.e. all spells are automatically accepted).

## Personal Spellbook

Each registered user should be able to view/modify their previously created spells and download them individually and in bulk.

## Campaign Spellbook

Each approved spell in a CG should be available for download individually and in bulk.

## Global Spellbook

All spells submitted by guests and published spells submitted by users should be available for download individually and in bulk.

# Roadmap

## Phase 1: Basic features

-   spell creation form
-   database
-   spell view
-   spell browser view
-   download view and process

## Phase 2: Add authentication

-   registration form
-   login form

## Phase 3: Personal spellbook

-   personal spellbook view
-   private spells
-   edit spell view
-   spell publishing
-   authorization

## Phase 4: Campaign groups

-   group db table
-   group view
-   DM view
-   create group view
-   join link
-   authorization
-   submit spell
-   spell approval
-   campaign spellbook view

## Phase 5: Fix and Polish

-   Final polish
-   Bugfixes
-   Other features that might come up
