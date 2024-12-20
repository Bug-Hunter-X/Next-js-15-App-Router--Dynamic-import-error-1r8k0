```javascript
// pages/index.js

async function Home() {
  const { MyComponent } = await import('./my-component');

  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default Home;

// my-component.js

export default function MyComponent() {
  return <div>Dynamic Component Loaded</div>;
}
```