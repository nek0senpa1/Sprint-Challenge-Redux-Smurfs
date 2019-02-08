1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map filter foreach


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
so the actions are like sets of objects that hold data that will be executed by the reducers once received, and once the
reducer does something with the actions it is sent it will update the store, which is basically a state we can use
anywhere in our app


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

each component can have it's own state to do... stuff with, whatever stuff is needed in that particular component, and the app state that's the big one that manages most of the stuff the smaller components see


1.  What is middleware?
What isn't middleware ;p  No it's extra little things we can add to make coding projects a lot faster, it does some magic
that lets us use some shortcuts in coding

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
well, i like to describe myself as a renegade of thunk... that's a musical reference there, but anyway.  so this allows us
to use axios calls (and presumably other things) within our redux actions as we define the objects that are sent to the
reducer


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect
