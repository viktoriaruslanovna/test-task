import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import ContactsPage from './pages/contacts/ContactPage';
import LoginPage from './pages/login/LoginPage';
import './scss/app.scss';

function App() {
  const { checkAuth } = useActions();
  useEffect(() => {
    checkAuth();
  }, []);

  const { isAuth } = useTypedSelector(state => state.auth);
  const { isLock } = useTypedSelector(state => state.lock);

  useEffect(() => {
    isLock
      ? document.body.classList.add('_lock')
      : document.body.classList.remove('_lock');
  }, [isLock]);

  return (
    <div className={isLock ? 'app _lock' : 'app'}>
      {isAuth ? (
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/contacts" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
