type MyComponentProps<T> = {
    items: T[]
    defaultItem: T
}

type User = {
    name: string
    age: number
}


function MyComponent<T>(props: MyComponentProps<T>) {
    console.log(props)
    return <p>some content</p>
}

const App = () => {
    const users: User[] = [{name: 'Frodo', age: 33}]

    return (
        <>
            <MyComponent items={['react', 'typescript']} defaultItem={'123'}/>
            <MyComponent items={users} defaultItem={{name: '123', age: 123}}/>
        </>
    )
}




