import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
import Calculatorchildcomp from './components/Calculator-Folder/Calculator-childcomponent';
import Quote from './components/Quote/Quote';
import { SharedStateProvider } from './SharedStateContext';
import RootLayout from './components/RootFolder/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="quote" element={<Quote />} />
      <Route index element={<Calculatorchildcomp />} />
    </Route>,
  ),
);

function App() {
  return (

    <SharedStateProvider>
      <RouterProvider router={router} />
    </SharedStateProvider>

  );
}

export default App;
