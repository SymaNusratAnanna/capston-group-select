import React from 'react';

const Qstnans = () => {
    return (
        <div>
            <h4>How does react works?</h4>
            <p>Ans:React is a declarative programming language. Each line of code in React declares what each app element is. If there are numerous state changes, React does not commit them one after the other. When data changes, it creates simple views for each state in the application, and React efficiently updates and renders the appropriate component. The declarative view simplifies debugging and makes code more predictable. And the React application is made up of several components, each of which is in charge of rendering a small, reusable chunk of HTML. Components can be nested within other components, allowing applications to be developed from simple building blocks. Components can also keep track of their own internal state.</p>
            
            <h4>What is the difference Props and State?</h4>
            <P>Data is passed from one component to another using props. The state is a type of local data storage that can only be accessed by the component and cannot be shared with other components.
Props have a read-only attribute. Asynchronous state modifications are possible. Props are unchangeable. The state of affairs can change at any time. Props allow you to pass data as an argument from one component to another. The components' information is stored in the state. The child component has access to props. Child components have no access to the state. Props are employed to communicate amongst the various parts of the set. States can be used to render the component's dynamic changes. Props are used to help components communicate with one another.
</P>


        </div>
    );
};

export default Qstnans;