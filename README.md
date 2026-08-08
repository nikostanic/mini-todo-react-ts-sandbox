# 🇷🇸 / 🇬🇧 Project Requirements & Roadmap

## 🇬🇧 English Version

| Requirement Title | Description | Key Concept Illustrated | Status |
| :--- | :--- | :--- | :--- |
| **Initialization & Typing** | Setting up Vite + React + TypeScript project with base types for `Task`. | TypeScript Union Types (`TaskStatus`), optional fields (`?`), and strict model typing. | 🟢 Completed |
| **Presentational Card** | Creating the `TaskCard` component to display individual task details. | Reusable UI components, `props` typing, and preventing prop drilling. | 🟢 Completed |
| **List Rendering & Key Prop** | Rendering an array of tasks using the `.map()` method in `App.tsx`. | Application entry point rendering, Virtual DOM `key={task.id}` usage, and JSX iteration. | 🟢 Completed |
| **UI Styling & Lookup Map** | Styling cards with Tailwind CSS and dynamic status badges. | Tailwind CSS integration, `Record<K, V>` (Lookup Table) usage, and JSX expressions. | 🟢 Completed |
| **Async Service Layer** | Creating `taskService.ts` with simulated network delay for API calls. | Infrastructure layer separation, working with `Promise<T>`, and `async/await` syntax. | 🟢 Completed |
| **Local State & Effects** | Managing `loading`, `error`, and `tasks` state variables. | `useState`, `useEffect` lifecycle management, and preventing infinite loops with `[]`. | 🟢 Completed |
| **Custom Hook Refactoring** | Extracting data-fetching and state logic from `App.tsx` into `useTasks.ts`. | **Clean Code** architecture, Single Responsibility Principle, and UI/business logic separation. | 🟢 Completed |
| **Filtering & Search** | Adding title search and status filter using the `useMemo` hook. | Performance optimization via **`useMemo`** and caching computed values. | 🔴 In Progress |
| **Constants & Utilities** | Creating `src/constants/` and `src/utils/` layers for date formatting and config. | Pure utility functions (`formatters.ts`), configurable constants, and code reusability. | ⚪ Pending |
| **Task Update & Deletion** | Adding actions to `TaskCard` to change status and remove tasks using `useCallback`. | Working with the **`useCallback`** hook, memory reference optimization, and event propagation. | ⚪ Pending |
| **Auto-Focus & DOM Refs** | Automatically focusing input fields when a modal or form opens. | Utilizing the **`useRef`** hook for direct DOM manipulation without triggering re-renders. | ⚪ Pending |
| **Form & Data Validation** | Building a new task creation form using Zod and React Hook Form. | Complex form handling, schema validation (`Zod`), and automatic TS type inference. | ⚪ Pending |
| **Global Theme (Dark/Light)** | Enabling app-wide theme switching across the entire component tree. | **React Context API** (`useContext`), global providers, and eliminating prop-drilling. | ⚪ Pending |
| **Server State Management** | Replacing manual `useEffect` fetching with TanStack Query (React Query). | Industry standard for server state caching, auto-refetching, mutations, and `useQuery`. | ⚪ Pending |
| **Global Toast Notifications** | Centralized notification system for displaying pop-up status messages. | Global state management using **Zustand** or **Redux Toolkit** outside the React tree. | ⚪ Pending |

# 🇷🇸 Srpska verzija
## 📋 Zahtjevi i Mapa Razvoja Aplikacije (Task Tracker)

| Kratak naziv zahtjeva | Kratak opis | Šta zahtjev ilustruje | Status |
| :--- | :--- | :--- | :--- |
| **Inicijalizacija i Tipizacija** | Postavljanje Vite + React + TypeScript projekta sa baznim tipovima za `Task`. | TypeScript unije (`TaskStatus`), opcionalna polja (`?`) i striktnu tipizaciju modela. | 🟢 Urađeno |
| **Prezentaciona Kartica** | Kreiranje `TaskCard` komponente za prikaz pojedinačnog zadatka. | Reupotrebljive UI komponente, `props` tipizaciju i sprečavanje *prop drilling-a*. | 🟢 Urađeno |
| **Prikaz Liste i Key Prop** | Renderovanje niza zadataka pomoću `.map()` petlje u `App.tsx`. | Ulaznu tačku za renderovanje, ulogu `key={task.id}` u Virtual DOM-u i iteraciju u JSX-u. | 🟢 Urađeno |
| **UI Stilizovanje i Lookup Map** | Stilizovanje kartica pomoću Tailwind CSS-a i dinamičkih boja za statuse. | Povezivanje Tailwind CSS-a, upotrebu `Record<K, V>` (Lookup Table) i rad sa JSX izrazima. | 🟢 Urađeno |
| **Asinhroni Servis Sloj** | Kreiranje `taskService.ts` sa simulacijom mrežnog kašnjenja za API pozive. | Razdvajanje infrastrukturnog sloja, rad sa `Promise<T>` i `async/await` sintaksom. | 🟢 Urađeno |
| **Lokalno Stanje i Efekti** | Upravljanje stanjem učitavanja (`loading`), grešaka (`error`) i podataka (`tasks`). | Rad sa `useState`, `useEffect` životnim ciklusom i sprečavanje beskonačnih petlji pomoću `[]`. | 🟢 Urađeno |
| **Custom Hook Refaktoring** | Izmještanje logike dobavljanja podataka i stanja iz `App.tsx` u `useTasks.ts`. | **Clean Code** arhitekturu, *Single Responsibility Principle* i razdvajanje UI od poslovne logike. | 🟢 Urađeno |
| **Filtriranje i Pretraga** | Dodavanje pretrage po nazivu i filtera po statusu uz upotrebu `useMemo`. | Optimizaciju performansi uz **`useMemo`** hook i keširanje izračunatih vrijednosti. | 🔴 U toku |
| **Konstante i Pomoćne Funkcije** | Kreiranje `src/constants/` i `src/utils/` slojeva za formatiranje datuma i konfiguraciju. | Čiste utiliti funkcije (`formatters.ts`), razdvajanje konfiguratibilnih podataka i reupotrebljivost koda. | ⚪ Čeka na izradu |
| **Ažuriranje i Brisanje Zadataka** | Dodavanje akcija na `TaskCard` za promenu statusa i uklanjanje zadatka uz `useCallback`. | Rad sa **`useCallback`** hook-om, optimizaciju memorijskih referenci i propagaciju događaja. | ⚪ Čeka na izradu |
| **Auto-fokus i DOM Reference** | Automatsko fokusiranje input polja prilikom otvaranja modalnog prozora. | Upotrebu **`useRef`** hook-a za direktan rad sa DOM elementima bez re-renderovanja. | ⚪ Čeka na izradu |
| **Forma i Validacija Podataka** | Izrada forme za dodavanje novog zadatka uz Zod i React Hook Form. | Izradu kompleksnih formi, šeme validacije unosa (`Zod`) i automatsko generisanje TS tipova. | ⚪ Čeka na izradu |
| **Globalna Tema (Dark/Light Mode)** | Omogućavanje promjene teme aplikacije na nivou cijelog stabla komponenata. | Rad sa **React Context API** (`useContext`), globalnim provajderima i sprečavanje *prop-drilling-a*. | ⚪ Čeka na izradu |
| **Upravljanje Server Stanjem** | Zamjena ručnog `useEffect`-a bibliotekom TanStack Query (React Query). | Industrijski standard za keširanje server stanja, automatski *refetch*, mutacije i `useQuery`. | ⚪ Čeka na izradu |
| **Globalne Toast Notifikacije** | Centralizovani sistem za prikazivanje pop-up poruka o statusu akcija. | Rad sa **Zustand** ili **Redux Toolkit** bibliotekama za globalno stanje van React stabla. | ⚪ Čeka na izradu |