# google-sheets-organiser
This project consists of using a Javascript for Google Sheets to organise the main sheet into the respective sheets dependent on their STATUS.

## Example
I have created a template excel sheet, which has the following sheets <br>
- NEW LEADS
- NEXT WEEK
- CALL BACK
- INTERESTED
- NOT INTERESTED<br>

The **NEW LEADS** sheet is the main sheet, where all the contacts are stored in. <br>
`Move Rows` will only move the current selected tab to the other sheets. <br>
`Move Rows in All Sheets` will move the current selected tab as well as any other tab that might have data that also needs to be moved around.

![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/3604f2d0-288c-4c5c-ae61-a70ffdf5a26c)

The **Apps Script** is where the **Javascript** code will be stored
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/041d1cd4-854f-4b3a-87e3-26224af8557c)

Once it is clicked, a separate webpage will open where you can insert the code
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/de4acb0a-c4fb-4dd1-8982-f4a90ef1a4b9)

## How it Works
This is what the **NEW LEADS** sheet contains, which is the main sheet:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/3fd62880-e039-4413-8bf6-5caa0196d846)

Notice how there are different `STATUS`. If the `STATUS` matches the name of the sheet, then when the script runs, it will go to that respective sheet.

### Before

NEXT WEEK
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/c0f1f8eb-e133-4d19-92d5-f57180842ffd)
CALL BACK
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/a91d7b97-5a2b-46b3-a172-8344ec141704)
INTERESTED
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/276581c4-b995-4a2e-8db6-d277075a69d7)
NOT INTERESTED
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/d906232a-8189-43fc-8a2b-5ef91f181945)


Clicking `Move Rows in All Sheets` will run the script, removing the rows starting from the last row.

This is what the `NEW LEADS` shows once the script is finished running:
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/102e4fa8-8ef3-47e8-9e4c-5c008309be53)
The reason only one row is still in here is because the STATUS name `A NICE LEAD` does not match with any of the sheet tabs. <br>
If the STATUS was empty, it would provide the same outcome.

### After

NEXT WEEK
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/38bc9388-9f2f-49bc-b04f-458d03915c31)
CALL BACK
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/4257103c-9798-41e4-8cf4-4b9f9b277e40)
INTERESTED
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/8c7cec03-e057-4432-b837-d50b0bec1741)
NOT INTERESTED
![image](https://github.com/danialjivraj/google-Sheets-Status-Organiser/assets/61945058/9f65baa3-653b-4f82-aac8-a431b72e425e)
