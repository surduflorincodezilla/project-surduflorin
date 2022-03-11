# project-surduflorin
 Trebuie sa avem node version 17.4.0. Ca sa ne asiguram ca avem aceasta versiune rulam "nvm use 17.4.0", iar daca nu este instalat rulam "nvm install 17.4.0" si apoi "nvm use 17.4.0".

Instalam global: 
npm install --global gulp-cli
npm install --global http-server

Pentru a instala librariile necesare unui proiect (listate in fisierul package.json), rulam comanda "npm install" in folderul proiectului (acolo unde este prezent si fisierul package.json). In cazul temei instaleaza tot ce are nevoie gulp-ul pentru a copila fisierele css.

Pentru a porni un http-server intr-un folder, rulam comanda "http-server" in folderul respectiv.

Valabil pentru proiectul temei: pentru a compila scss-ul rulam "gulp" in folderul proiectului (acolo unde este prezent si fisierul gulpfile.js). Iar comanda "gulp watch" rulata in folderul proiectului se uita la fisierele scss din proiect si le compileaza de fiecare data cand detecteaza o modificare. 

