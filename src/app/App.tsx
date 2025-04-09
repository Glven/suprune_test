import {AppRouter} from "@/app/RouterProvider";
import './styles/style.sass';
import {StoreProvider} from './providers/store-providers.tsx'

const App = () => {
    return (
        <StoreProvider>
            <AppRouter/>
        </StoreProvider>
    )
}

export default App;