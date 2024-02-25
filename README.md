# Zadanie rekrutacyjne
DEMO ➡️ https://vue-rekrutacja.vercel.app/
## Planowanie
Po zapoznaniu się z treścią przystąpiłem do wstępnego planowania. Zaplanowałem, jak wstępnie będzie wyglądać aplikacja.

![image](https://github.com/abieniek03/vue-rekrutacja/assets/106828687/f936ca25-5caf-41ef-8d99-56e172fdb232)

## Realizacja
Projekt został stworzony przy użyciu Vite. Framework Vue 3 - composition API + TypeScript \
Do stylowania aplikacji użyłem CSS z preprocesorem Sass. \
Przy nazewnictwie klas korzystałem z metodologii BEM. \
Biblioteka do zarządzania stanem - Vuex. \
Routing - Vue Router.

Przy użyciu Vuex, konkretnie przy imporcie elementów z biblioteki w komponentach aplikacji w moim edytorze **Visual Studio Code** wyświetlał się błąd związany z typami.
Szukałem odpowiedniej biblioteki zapewniającej typy dla Vuex na **npm**, ale niestety nie znalazłem nic odpoowiedniego. Dlatego zdecydowałem się na użycie ``//@ts-ignore``

## Dodatkowe funkcjonalności
Aplikacja posiada wyszukiwarkę, która pozwala na wyszukanie posta po jego tytule. Posty odświeżane są w czasie rzeczywistym, kiedy użytkownik wpisuje/edytuje frazę wyszukiwania.
Dodatkową opcją jest także wyświetlenie całego posta.
