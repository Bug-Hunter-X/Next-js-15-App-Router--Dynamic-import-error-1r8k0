# Next.js 15 App Router Dynamic Import Error

This repository demonstrates a bug in Next.js 15's App Router when using dynamic imports within a component.  The issue occurs when attempting to import a module dynamically, leading to unexpected behavior or errors.

## Bug Description

The dynamic import statement fails to resolve the module correctly, resulting in runtime errors. This behavior is inconsistent with previous versions of Next.js.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.

## Solution

A workaround is provided to resolve the dynamic import issue within the application.