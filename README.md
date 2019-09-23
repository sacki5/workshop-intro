## Setup ##

1. Installera @vue/cli `yarn global add @vue/cli`

2. Skapa nytt projekt `vue create new-project`

   1. Manually select features
   2. Babel och Linter
   3. Airbnb
   4. Lint on save

3. Öppna projektet i VSCode. Och kör det med hjäp av `yarn serve`. 

4. Installera VSCode plugins

   1. Vetur

   2. Eslint

      1. Lägg till detta i inställningar

         ```json
         "eslint.validate": [
                 "javascript",
                 "javascriptreact",
                 {
                     "language": "vue",
                     "autoFix": true
                 }
             ],
          "eslint.autoFixOnSave": true,
         ```

5. Installera Vue.js devtools i chrome. https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en

## Vue basics ##

https://github.com/sacki5/workshop-intro

1. Radera helloWorld.vue och ta bort den från app.vue
2. Skapa en filen `/components/message.vue`
3. Importera den i `app.vue` och skriv ut den i template.
4. I `message.vue` definera `message` i data och skriv ut det i template. 
5. Lägg till ett input fält kopplat till `message`
6. Skicka in `default-message`som prop in i `message.vue`från `app.vue`
7. Sätt `message` som `default message`. 
8. Skapa en knapp som skickar vårat nya meddelande tillbaka till `app.vue`
9. Skapa en data i `app.vue` som heter `messages` som är ett tomt array.
10. Skapa en funktion som lägger till ett meddelande i `messages`. 
11. Kalla funktionen på det event som ni gjorde i `messages`.

12. Skapa en komponent som heter `list.vue` som ni importerar i `app.vue`.
13. Skapa en prop som heter items i `list.vue`.
14. Skriv ut items som en lista. 
