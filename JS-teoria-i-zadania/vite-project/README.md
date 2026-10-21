# Mój projekt w Vite (Front End)

1. Strona: https://vite.dev/
2. Komenda:

```
npm create vite@latest
```

3. Wybieramy: nazwę, potem `Vanilla`, potem `JavaScript` potem `Yes` (install)

4. Jednorazowo `vite-project/` i komenda:

```
npm install
```

5. Potem żeby uchomić (`scripts`):

```
npm run dev
```

6. potem Wersja produkcyjna:
```
npm run build
```

Vite, działa jako tzw. `Bundler` - czyli łączy wszystkie pliki `.js` w "jeden". Pozwala importować do plików `.js` inne formaty plików np.

- .css
- .png
- .svg

...itd.


Finalnie - zimportowanie w ten sposób innego niż `.js` pliku - spowoduje, kontolę nad jego `Cache` w przeglądarce.