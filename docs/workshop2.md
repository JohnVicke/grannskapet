# Workshop 2 - test product
*Länk till prototyp(er), användartestning och projektstruktur finns i repots [README.md](https://github.com/JohnVicke/grannskapet).*


# Prototyp
Den nuvarande prototypen är väldigt enkel, men mycket av funktonaliteten existerar vilket gör det enkelt att testa.
Användare kan logga in, söka bland grupper, gå med i grupper etc.

Som admin över en grupp ska man kunna ange vilken grupptyp det är vilket låser upp olika sorts moduler.
Dessa moduler är självstående komponenter som går att toggla av/på för en grupp.
Varje grupptyp har en rekommenderad template över moduler, men användaren kan även bygga ihop layouten själv utifrån vad den anser är bäst.
"Klipp och klistra ihop din sida".


### Design:
- [x] Flöde testat på användare (papper och penna + diskussion)
- [x] Prototyp påbörjad (pga tidsbrist påbörjas hi-fi tidigare)

### App och server:
- [x] Säker inloggning via Auth0 (Social logins med Google, Facebook, men även password/lösen med sms verifikation).
- [x] Integration med AWS S3 (image cdn) och AWS CloudFront (proxy server/cache).
- [x] Basstruktur för applikationen (komponenter, färgschema, state management, cache, routing).
- [x] Basstruktur för servern (GraphQL med SQL).
- [x] Real-time socket kommunikation (Notifikationer, event, chat etc).
- [x] Databas-design för grupper, grupptyper, användare, företag och allt runtom.

# Test av hypotes
För att testa de hypoteser som sattes upp för affärsidéen så har ett antal användarintervjuer gjorts.
Generellt så gav intervjupersonerna en positiv inställning till produkten, men även viss kritik.
Intervjuerna var relativt spontana där jag inte följde någon mall eller hade förberedda frågor.
Jag ville få en mer avslappnad miljö där vi mest pratade om applikationen.
Då jag är ensam i min grupp har det varit relativt svårt att brainstorma och fundera på applikationens
kritiska funktioner och flöden.
Dessa intervjuer fungerade dels som en intressekoll, men även som ett bollplank.


### Resultat från intervjuer
**Totalt antal intervjuer:** 8 
- 6/8 (75%) av intervjupersonerna var antingen studenter inom datavetenskap eller interaktion och design.
- 2/8 (25%) av intervjupersonerna var verksamma inom lokalt näringsliv.


**Positiva**
- Kul initiativ, särskilt för lokala idrottsföreningar som kan samlas och marknadsföra sig själva
- Jag hade lätt använt den om jag flyttat till en ny stad
- Skönt att slippa facebookgrupper de är så förvirrande

**Att tänka på**
- Hur kommer appens innehåll "modereras" (får man lägga upp vad som helst?)
- Bygger du inte bara facebook med annant gränssnitt?

# Uppdatering av affärsplan
Affärsplanen kommer att forstätta utan större förändringar.
I en av intervjuerna fick jag en bra idé om att ytterligare kunna monetisera applikationen genom att införa "power-användare".
Det som menas med "power-användare" är att grupper bör ha någon sorts nedskärning av funktionalitet / antal användare och för att låsa upp detta betalar man en liten slant.
Detta är väldigt smart, då t.ex. större grupper kräver fler resurser från servern.
Då servern är elastisk och skalar upp mot användare och där mer requests => mer kostnader så blir det även ett sätt att se till så vissa grupper inte blir "inkomst-tjuvar" (står för stor % av serverkostnader).

# Fortsättning av Grannskapet
Utvecklingen av Grannskapet kommer att fortsätta, användarintervjuerna har påvisat en väldigt positiv inställning till affärsidén. 
Däremot så har utvecklingn skalats ner för att hinna bli klar för att presentera en MVP. Mycket av funktionaliteten som krävs är relativt komplicerad men inte en "must-have".
Fokuset blir på att försöka göra klart minsta möjliga för att kunna testa den en liten skala.
# Nästa steg
Nästa steg för Grannskapet är att dels fortsätta med utvecklingen/designen av applikationen, men även att prata med lokala företag för att se om intresset finns för samarbeten.

Verkar allting grönt och det finns intresse både från användare (utifrån testen inför denna workshop verkar det finnas) och från företag
så ska Grannskapet lanseras som en MVP i liten skala för utvalda användare.

----
*När alla dessa lådor är ifyllda så kan en MVP för applikationen lanseras:*
- [ ] Företags login och dashboard (statistik för reach, click-through etc).
- [ ] Slutför design av moduler för grupper. 
- [ ] Översätt design till applikation.
- [ ] Implementera platsberoende annonsering för lokala företag.
- [ ] Skapa taggar för företag och grupper så att annonsering sker på rätt plats.
- [ ] Hitta testanvändare för alpha version
----
