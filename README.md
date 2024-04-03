# Google Sheets Status Organiser
This projects consists of using a Javascript for Google Sheets to organise the main sheet into the respective sheets dependent on their STATUS
## The Problem
Cold calling can be tough, specially when you don't have a proper system or organisation tool to make your life easier when you're keeping record of hundreds of companies information.
This Javascript code was developed to organise rows into their respective sheet.
I have created a template excel sheet, which has the following sheets: <br>
**NEW LEADS<br>
NEXT WEEK<br>
CALL BACK<br>
INTERESTED<br>
NOT INTERESTED<br>**

## Objective
The objective of this project is to make organising easy while using Google Sheets, so that cold calling can be affective and not confusing without a proper system to organise it.

The `NEW LEADS` sheet is the main sheet, where all the contacts are stored in.
The script can be found in this tab as seen below, which was created for this purpose, here you can see `Move Rows` and `Move Rows in All Sheets`. <br>
This means that if for example I was in the `AVAILABLE` sheet and had some rows that needed to be moved from `AVAILABLE` to `NOT INTERESTED` without affecting the others sheets that might have rows that also need to be moved but that you perhaps might not want to move them yet, then the `Move Rows` will only affect the sheet you are currently in, moving what needs to be moved from `AVAILABLE` to whichever sheet it needs to go to, without affecting the rest of the sheets.<br>
`Move Rows in All Sheets` will move everything around, so if there were rows that needed to be moved from various sheets, it would move them all around to their correct sheet from this option by clicking it once.<br>
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/3604f2d0-288c-4c5c-ae61-a70ffdf5a26c)

The **Apps Script** is where the **Javascript** code will be stores, which makes things easier. It can be found in here:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/041d1cd4-854f-4b3a-87e3-26224af8557c)

Once it is clicked, a separate webpage will open where you can see the code:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/de4acb0a-c4fb-4dd1-8982-f4a90ef1a4b9)

## How it Works
The way it works is very simple.
This is what the `NEW LEADS` sheet contains, which is the main sheet:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/3fd62880-e039-4413-8bf6-5caa0196d846)

Notice how there are different `STATUS`. If the `STATUS` matches the name of the sheet, then when the script runs, it will go to that sheet.

This is the before the script is run, as all lists are shown empty, because currently, NEW LEADS contains all the information.<br>
**Before:**<br>

**NEXT WEEK** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/c0f1f8eb-e133-4d19-92d5-f57180842ffd)
**CALL BACK** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/a91d7b97-5a2b-46b3-a172-8344ec141704)
**INTERESTED** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/276581c4-b995-4a2e-8db6-d277075a69d7)
**NOT INTERESTED** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/d906232a-8189-43fc-8a2b-5ef91f181945)


Now, once the `Move Rows in All Sheets` is clicked, the script will begin running, and it will start removing the rows starting from the last row.

The script has now finished, and this is what the `NEW LEADS` shows:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/102e4fa8-8ef3-47e8-9e4c-5c008309be53)
The reason only one value is still in here is because the STATUS for the company name Pepe, did not match any of the current existing sheets. If it was empty, it would also stay in the same sheet after the script ran through.

Now let's check the other sheets, <br>
**After:**<br>

**NEXT WEEK** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/38bc9388-9f2f-49bc-b04f-458d03915c31)
**CALL BACK** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/4257103c-9798-41e4-8cf4-4b9f9b277e40)
**INTERESTED** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/8c7cec03-e057-4432-b837-d50b0bec1741)
**NOT INTERESTED** - ![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/9f65baa3-653b-4f82-aac8-a431b72e425e)

And that's it! Everything just organises by itself, and time is saved!<br>
PS: The backup sheet in case you noticed is just, as the name says, a backup, it contains nothing but the raw data before being used and moved around!<br>
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/9a87644e-d4b7-47c9-8386-aa91aa51b89a)

# Conclusion
With this project, I got to create something fairly simple, but extremely effective when it comes to saving time. Although simple, anyone can use this or modify it to their preferences. With hundreds to thousands of leads that someone may store, having this script as a tool to organise can save immense amount of time.
Getting to experiment and use Javascript in this project was rewarding. Although I would say a fairly simple program, it is a nice starting point and a good project overall to play around with.
