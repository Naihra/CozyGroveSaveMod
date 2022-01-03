# Latest change
#### 03/01/22
Added "Quest" option to finder, to show the bears that have active quests story (blue) or timed (red) ones. It's necessary to redownload the data folder as well.

# Save location
Steam and MAC: https://support.spryfox.com/hc/en-us/articles/1500003981321-Where-can-I-find-my-Cozy-Grove-logs-and-save-files-
iOS: https://support.spryfox.com/hc/en-us/articles/4402233611415

The save from iOS is compatible with the apps that read the save, but not with the ones that modify it, the saves generated by those apps will only work with Steam or MAC versions.

# How to use
You can download everything as a zip, and unzip it anywhere, or just the html you want, but the DATA folder needs to be in the same directory. 

![image](https://user-images.githubusercontent.com/84879535/119782142-1d5a6000-becc-11eb-9f7c-b53b5b9b8d90.png)

Then run the .html in any browser. 

## Show data
These apps don't alter the save file in any way, they only take information from it and show it.

### Animal List
Shows all the animals on map and lists their details, including if they are hungry.

The food names are the in-save coded ones.

The table can be sorted by clicking on the header, and the animals that show on the map can be filtered by hunger, age and type.

### Finder
Locates any item that's on the ground, can use any of the preset selection or input a string in "Custom search", then press Enter or the button.

![image](https://user-images.githubusercontent.com/84879535/147986537-127dc0fb-83b8-49a3-946d-58bdd474587b.png)

In the "Presets" option any of the options can be selected, including all of them at once.

![image](https://user-images.githubusercontent.com/84879535/147986549-0fb64e3e-05e2-4f24-b06f-84723df60c08.png)

Shells and critters not in collection will show highlighted.

## Modify data
These apps create a new save file from the information of the one you load. My recommendation is load the save in another slot. I've used all 3 of them many times now and haven't had any issues, but use them under your own responsability and always make a copy before.

Name of the slots are "cg_save.sf" "cg_save_2.sf" "cg_save_3.sf".

### Recycler
Takes imp essence, greens and ingots from your inventory only, not from storage. 

In the current version you get 3 lower rank essences for each one you recycle and 2 for greens and ingots.

They max at 50, if it were to generate more than that the excess will be lost, but different stacks are treated separatedly.

### Furniture Recycler
Turns furniture into its corresponding crafting recipe.

Reads the furniture items from inventory (not storage) and present a list so the items to be recycled can be selected by clicking on the line. If the recipe has already been obtained it will be marked with "Have".

![image](https://user-images.githubusercontent.com/84879535/120932385-d18e8e80-c6f5-11eb-9c96-f90dec449aac.png)

Having more than one item in the slot will cause all of them to disappeared and be replaced with the recipe.

### Planter
#### ONLY FULLY COMPATIBLE WITH GAME VERSION 4.1.0 AND ABOVE
Turns flowers blossom into a potted flower or bush.

It will read the blossoms from inventory (not storage) and present a list. This list will indicate if that particular flower is planted on the island or if it has already been donated.

The "Mark new" button will mark all the blossoms that have one of those two columns empty. Any other line can be marked and unmarked by clicking on the line.

![image](https://user-images.githubusercontent.com/84879535/145677105-e7a6962d-585f-4c4c-943b-6dd5185f9278.png)

The pot color and bush variation (pot/size) can't be chosen because not all flowers exists in all varieties, so it will be picked at random from a selection that guarantees a valid combination.

Before game version 4.1.0 some of the flowers/bushes didn't exist, so the app would return a softwood instead.

### Sort Collection
Sorts the items in collection.

When there are no options the order is alphabetical.

Shells, fish, flowers and critters can be grouped in different ways.

Only the marked categories will be sorted.

![Sort](https://user-images.githubusercontent.com/84879535/120906050-95582100-c656-11eb-8a7a-eab422e7800a.png)

Grouped by type/season, type/color, color.

### Inventory Expander
Expands or reduces the size of the backpack, storage or wardrobe. To make it less of a cheat there is an optional "Donation" field, where you can input the amount you want to spend on the upgrade.

The input values for rows can be positive or negative, and it will add or remove 4 slots per row to keep the inventories consistent. If after removing the slots you end up with less than what you should have based on the upgrades you've already purchased the game will add them when you load the save.

## iOS to Steam converter
Contains only the load/save functions of the apps that modify the data. It will simply take the iOS save and return one compatible with Steam.

If a Steam or MAC save is loaded it will return the same save.
