# Coding Convention

This document outlines the coding conventions for structuring our application. The goal is to maintain consistency, scalability, and easy of collaboration among team members. By adhering to theses conventions, we ensure that the codebase remains modular, maintainable, and easy to navigate as the project grows.

## File Naming Conventions

### All Files

- All file names should be in lowercase. This avoids issues with case sensitivity on different operating systems.
- Use hyphens (`-`) to separate words.
- Avoid spaces, underscores (`_`) and camelCase.
- Be descriptive but concise.

## Modularity

- Keep different concerns (e.g., routing, business logic, validation) in separate modules or folders for better maintainability.
- Use barrel files for easy imports and organization.

## Middleware Files

- Use descriptive names based on the functionality.
- Always use named exports for middleware functions
- Add your middleware in the barrel file, usually in the `index.js`

Example:

```js
export function sample(req, res, next) {
  if (!req.user) {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  next();
}
```

## Error handling

- Always handle errors in controllers and middleware if necessary.
- Provide meaningful error messages in the response to help diagnose issues.
- Use a proper status for each response.

## Validation Middleware

- Use middleware for validating request bodies, query parameters, or headers.
- You can add libraries to help you.
