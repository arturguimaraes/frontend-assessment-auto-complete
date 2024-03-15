# Part 2

### Questions

1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

The Component does not implement the `shouldComponentUpdate()` method, and the PureComponent does. Because of this, Component calls the `render()` method behind the scenes every time states or props are updated. With that being said, PureComponent is more efficient because it compares the old state with the new one, and prevents unnecessary re-renders.

But this comparison is very basic, so if we have more complex states, nested properties, etc., it might break the app.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

This combination is dangerous because the context bypasses the `shouldComponentUpdate()` method. So sometimes the component might miss a state update. To resolve this, use `React.memo`.

3. **Describe 3 ways to pass information from a component to its PARENT.**

- ContextAPI: React feature to access states across the app, without the need of prop-drilling.
- Passing a function as callback: Receive a function as callback from the parent, and pass the information in the parameters.
- Moving the state/info up: Move the information or state to the parent, and pass it down to the child component via props.

4. **Give 2 ways to prevent components from re-rendering.**

- React.memo
- PureComponent

5. **What is a fragment and why do we need it? Give an example where it might break my app.**

Since every component needs to return a single JSX Element, React created the `React.Fragment` element to help us group elements in sequence and in the same level, to avoid unecessary creation of extra divs in the DOM. It might break the app for example, if in CSS we have access through parents:

```css
.parent > .child {
  /* some property */
}
```

Works:

```html
<div className="parent">
  <div className="child">Child 1</div>
  <div className="child">Child 2</div>
</div>
```

Does not work:

```html
<>
  <div className="child">Child 1</div>
  <div className="child">Child 2</div>
</>
```

6. **Give 3 examples of the HOC pattern.**

- For applying layouts in a component

```jsx
const withLayout = (WrappedComponent) => (props) => {
  return (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};
```

- For authentication

```jsx
const withUserAuthentication = (WrappedComponent) => (props) => {
  const isAuthenticated = checkIsAuthenticated();
  return isAuthenticated ? <WrappedComponent {...props} /> : <LoginComponent />;
};
```

- For fetching data

```jsx
const withDataFetching = (WrappedComponent) => (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  return <WrappedComponent data={data} {...props} />;
};
```

7. **What's the difference in handling exceptions in promises, callbacks and async...await?**

In promises, we would use the `catch()` method, that enters in case any failures happen.

```javascript
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

In async functions and callbacks we would use the `try` and `catch` blocks.

```javascript
async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

8. **How many arguments does setState take and why is it async.**

- Update: `(state, props) => stateChange`.
- Callback: Function that runs after `setState` is done.

It is async to increase performance.

9. **List the steps needed to migrate a Class to Function Component.**

- Use `useState` hook.
- Change `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` to the `useEffect` hook.
- Refs with `useRef` instead of `this.refs`.
- Props accessed directly through function parameters.
- Convert methods into functions within the functional component.

10. **List a few ways styles can be used with components.**

- CSS Modules
- Inline styling
- CSS Stylesheets
- Styled Components

11. **How to render an HTML string coming from the server.**

Even though it's not recommended, because of attacks in the HTML, you can use the `dangerouslySetInnerHTML` attribute.
```jsx
<div dangerouslySetInnerHTML={{ __html: theStringReceivedFromServer }} />
```


