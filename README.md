# Dynamic Task Dashboard

A client-side task management dashboard built with vanilla JavaScript, emphasizing asynchronous flows, DOM rendering, and immutable data modeling.

## File Organization
- `index.html`: Base page markup including interactive containers and layout targets.
- `style.css`: Modern dark theme styles and status classes (e.g., strikethroughs for completed tasks).
- `taskManager.js`: Encapsulates `Task` and `TaskManager` classes with frozen ID assignment and non-mutating transformations.
- `api.js`: Asynchronous task service simulating server latency via Promise and `setTimeout`.
- `main.js`: Main orchestration file handling event listeners, JSON serialization/parsing, and dynamic UI rerendering.

## Challenges Faced
- **Enforcing ID Immutability**: Ensuring the `id` field cannot be overwritten required leveraging `Object.defineProperty` with `writable: false`.
- **Pure State Updates**: Avoiding in-place mutations required utilizing `map()` and `filter()` returning freshly instantiated `TaskManager` containers instead of mutating class instances directly.

## Recommended Git Commit History (7 commits minimum)
1. `feat: scaffold initial HTML document structure and base styling`
2. `feat: implement Task class with immutable ID via defineProperty`
3. `feat: implement TaskManager class with pure immutable array methods`
4. `feat: simulate asynchronous API client with 1500ms delay`
5. `feat: wire JSON serialization pipeline and async loading orchestration`
6. `feat: build dynamic DOM tree creation and toggle/delete event binding`
7. `docs: add comprehensive README documenting file structure and state workflow`