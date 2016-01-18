#Alkalmazások fejlesztése - 3. beadandó

Tárgyfelvétel

Készítette: Seller János - QI3X6K

#Követelményanalízis

A beadandó célja egy webes vastagkliens, azaz egyoldalas alkalmazás készítése Ember.js segítségével.

Az álltalam választott feladat egy Tárgyfelvevő weblap, ahol a felhasználó regisztráció és bejelentkezés után felvehet neki tetsző tárgyakat. A felhasználó csak a saját felvett tárgyait látja. Ezen kívül lehetőség van tárgyak törlésére , szerkesztésére, ezen kívül kommentelni lehet a felvett tárgyakhoz, és ezeket a kommenteket megnézni.

Szakterületi fogalomjegyzék

REST API végpont - Representational State Transfer (REST) Application Programming Interface (API)

Webes vastagkliens - egyoldalas webes alkalmazás

#Használatieset-modell

![hasznalatieset__modell](kok/docs/images/hasznalatieset__modell.png)

Egy kifejtett használati eset folyamatábrája:

![folyamatabra](kok/docs/images/folyamatabra.png)

Funkcionális elvárások:

    1. Tárgyfelvétel -> Lehetőség van új tárgy felvételére.
    2. Tárgy törlés -> Lehetőség van már meglévő tárgy törlésére.
    3. Tárgy szerkesztés -> Lehetőség van már meglévő tárgy szerkesztésére.
    4. Hozzászólás írása -> Hozzászólásokat írhatunk a felvett tárgyakhoz.
    5. Tárgyadatok áttekintése  -> Már felvett tárgy részleteinek és hozzászólásainak megtekintése.

Nem funkcionális elvárások:

    1. felhasználóbarát
    2. egyszerű
    3. gyors
    
Tervezés

Architektúra terv

Oldaltérkép

  -Főoldal
  -Tárgy felvétele:
    -új tárgy
    -szerkesztés
    -törlés
    -megtekintés
    -hozzászólás

Végpontok

- / : főoldal
- /errors/list : tárgylista
- /errors/view/:error_id : tárgy adatai
- /errors/edit/:error_id : tárgy adatainak módosítása
- /errors/comments/new/:error_id : új komment hozzáadás
        
Felhasználóifelület-modell

#Designterv:

![home](kok/docs/images/home.png)

![list](kok/docs/images/list.png)

![new](kok/docs/images/new.png)

![comment](kok/docs/images/comment.png)

![view](kok/docs/images/view.png)

#Osztálymodell

1. Adatmodell

    ![Adatmodell](kok/docs/images/adatmodell.png)

2. Adatbázisterv

    ![Adatbázisterv](kok/docs/images/adatb.png)

#3. Implementáció

#Fejlesztői környezet bemutatása

A program fejlesztése során az alábbi fejlesztői környezeteket használtam:
1. gitHub - itt tárolódik a repository, azaz a gitHub szolgáltatja a tárhelyet az alkalmazásnak
2. cloud9 IDE - itt végeztem az aktuális kódolást, tesztelést

#Könyvtárstruktúrában lévő mappák funkciójának bemutatása

Kliensoldalon az "app" mappa tartalmazza a kliensoldalhoz szükséges összes fájlt, valamint tartalmaz több almappát is, amelyek az alábbiak:

A "pods/application" mappa tartalmazza az aktuális applikációt.

A "pods/comment" mappa tartalazza a hozzászólások modelljét

A "pods/components" mappa tartalmazza az Ember.js által generált, majd bővített komponenseket, melyek név szerint vannak almappába rendezve:

  -"error-detail": tárgyak adatait megjelenítő sablon,
  
  -"error-list": a listázóoldal táblázatát tartalmazó sablon,

  -"modal-dialog": a felugróablak,

  -"new-comment-form": a felugróablakba betöltendő kérdőív,

  -"new-comment-modal": a kommentekhez tartozó felugróablak,

  -"new-error-form": a felugróablakba betöltendő kérdőív,

  -"new-error-modal": a tárgy felvételéhez tartozó felugróablak,

A "error" mappa tartalmazza a tárgyak modelljét.
 
A "errors" mappa tartalmazza a fent felsoroltak controllereit tartalmazó mappákat, név szerint:

"comments/new": új komment felvételéhez használt blokk, a "new-comment-form"-ot használja,

"edit": a szerkesztéshez használt blokk, a "new-error-form" template-et használja,

"list": a listázóoldal keretének template-je, a "error-list" template-et használja, ez a modal miatt egyben használja a "modal-dialog" és a "new-error-form" template-eket is,

"new": a "new-error-form" templatet használja, új tárgy felvételéhez használt blokk

"view": a "error-detail" template-et használó controllet mappája.

"index": a főoldalt tartalmazó template mappája.

A "docs" mappa "images" almappája tárolja a dokumentáció képeit

Szerveroldalon a ".db" mappa az adatbázis tárolására, míg a gyökérmappában lévő server.js az adatbáziskezelő szerver létrehozására szolgál.

#4. Tesztelés

Tesztelt esetek:

1. új tárgy létrehozása: az "New subject" gombra való kattintásra felugrik a "new-error-form" modal ablak, amely bekéri az adatokat. Hiányos adatok esetén jelzi a problémát, és nem enged új tárgyat hozzáadni, amíg fenn áll a probléma. Ezután a "Submit" gomb lenyomása után a modal ablak bezárul, a felvett tárgy pedig megjelenik a listázó oldalon.

2. tárgy szerkesztése: a listázóoldal megfelelő sorában az "Edit" gombra kattintva megjelenik a "new-error-form" modal, amelybe már be vannak töltve a tárgyak adatai.

3. tárgy megtekintése: a listázóoldal megfelelő sorában a "View" gombra kattintva megjelenik a megtekinteni kívánt tárgy minden adata: ID, subject, time, subjectcode és comments. A "Back" gombra kattintva visszakerülünk a listázóoldalra.

4. tárgy törtlése az adatbázisból: a listázóoldal megfelelő sorában a "Delete" gombra kattintva törlődik az adatbázisból is a megjelenítési listából is a törölni kívánt elem.

5. hozzászólás írása: A listázóoldal megfelelő sorában a "Comment" gombra kattintva vehetünk fel új hozzászólást a tárgyakhoz.

#5. Felhasználói dokumentáció

A program futtatásához elegendő egy modern böngésző (IE 9+, Google Chrome, Mozilla Firefox, Opera, Safari) és a cloud9 rendszer (node.js).

A program használata egyszerű: a szerver felállása után a kliensoldalon keresztül a felhasználó meglátogatja a főoldalt, ahol rövid leírást olvashat a honlap lényegéről.

Utána a menüben lévő "Subjects" menüpontra kattintva betöltődik a tárgyak listája. Ha már van tárgy a táblázatban, akkor a felhasználó továbbra is vehet fel új tárgyakat, viszont szerkesztheti, megtekintheti,törölheti vagy kommentelheti is a már meglévők bármelyikét a táblázat megfelelő sorában a megfelelő gombra kattintva, amelyek sorban az alábbiak:

1. View: tárgy részleteinek megtekintése

2. Edit: tárgy szerkesztése

3. Delete: tárgy törlése

4. Comment: új hozzászólás 

Ha üres a táblázat, a felhasználó felvehet, de mást nem tud tenni. Új tárgy felvételéhez az "New Subject" feliratú gombra kell kattintania, majd a felugró ablakban kitölteni a megfelelő mezőket, amelyek az alábbiak:

1. Subject: a tárgy neve

2. Subjectcode: a tróárgy kója

3. Time: a tárgy időpontja

Minden egyes, a felületen végzett változtatás eredménye megjelenik a táblázatban, így a felhasználó azonnali visszaigazolást kap arról, ami a háttérben az adatbázisban történik.
