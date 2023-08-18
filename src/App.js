// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';
// import Calculator from './components/Calculator';
import Calculatorchildcomp from './components/Calculator-Folder/Calculator-childcomponent';
import Quote from './components/Quote/Quote';
import { SharedStateProvider } from './SharedStateContext';
import RootLayout from './components/RootFolder/RootLayout';
import Page1 from './components/Page-1/Page1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Page1 />} />
      <Route path="quote" element={<Quote />} />
      <Route path="calculator" element={<Calculatorchildcomp />} />
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
