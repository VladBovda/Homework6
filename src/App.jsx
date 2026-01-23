import React from 'react';

const WrapperComponent = ({ children }) => {
    return (
        <div>
            <h1 className='font-bold text-center mt-10 text-3xl text-violet-600'>Hello, Webpack, React, and especially Tailwind!</h1>
            <div className='Wrapper'>{children}</div>
        </div>
    );
}

const CounterComponent = (props) => {
    const [count, setCount] = React.useState(props.defaultCount || 0);

    const increment = () => {
        setCount(count + 1);
    };

    const dicrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='flex flex-col items-center gap-5 mt-10'>
            <h2 className='text-2xl font-bold text-yellow-600'>Counter</h2>
            <p className='text-xl font-bold text-green-600'>Current count: {count}</p>
            <div className='flex gap-5'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>Increment</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={dicrement}>Decrement</button>
            </div>
        </div>
    );
}


const App = () => (
    console.log("Webpack and React are set up!"),
    <WrapperComponent>
        <CounterComponent defaultCount={5} />
    </WrapperComponent>
);

export default App;