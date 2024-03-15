# Part 2

### Questions

1. **What is the difference between Component and PureComponent? Give an example where it might break my app.**

The Component does not implement the shouldComponentUpdate() method, and the PureComponent does. Because of this, Component calls the render() method behind the scenes every time states or props are updated. With that being said, PureComponent is more efficient because it compares the old state with the new one, and prevents unnecessary re-renders.

But this comparison is very basic, so if we have more complex states, nested properties, etc., it might break the app.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

This combination is dangerous because the context bypasses the shouldComponentUpdate() method. So sometimes the component might miss a state update. To resolve this, use React.memo.

3. **Describe 3 ways to pass information from a component to its PARENT.**

- ContextAPI: React feature to access states across the app, without the need of prop-drilling.
- Passing a function as callback: Receive a function as callback from the parent, and pass the information in the parameters.
- Moving the state/info up: Move the information or state to the parent, and pass it down to the child component via props.

4. **Give 2 ways to prevent components from re-rendering.**

- React.memo
- PureComponent

5. **What is a fragment and why do we need it? Give an example where it might break my app.**

Since every component needs to return a single JSX Element, React created the React.Fragment element to help us group elements in sequence and in the same level, to avoid unecessary creation of extra divs in the DOM. It might break the app for example, if in CSS we have access through parents:

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

Does not work

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
      <WrappedComponent data={data} {...props} />
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
