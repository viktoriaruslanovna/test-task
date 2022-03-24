import React from 'react';
import { useForm } from 'react-hook-form';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FormData } from '../../types/login';
import { useNavigate } from 'react-router';
import './loginpage.scss';

const LoginPage: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const navigate = useNavigate();
  const { loading, error } = useTypedSelector(state => state.login);

  const { login } = useActions();
  const { authenicate } = useActions();

  const fetchLogin = handleSubmit(async user => {
    const body = {
      user,
    };

    const isError = await login(body);
    if (!isError) {
    } else {
      reset();
      authenicate();
      navigate('/contacts');
    }
  });

  return (
    <div className="loginpage">
      <h1>Авторизация</h1>
      <div className="loginpage__form__wrapper">
        <form className="form" onSubmit={fetchLogin}>
          <div className="form__group">
            <label className="form__label">Почта</label>
            <input
              className="form__input"
              type="email"
              {...register('email', {
                required: true,
              })}
            />
            <div className="form__error">
              {error && <p>{error}</p>}
              {errors?.email && <p>{errors?.email.message || Error!}</p>}
            </div>
          </div>
          <div className="form__group">
            <label className="form__label">Пароль</label>
            <input
              className="form__input"
              type="password"
              {...register('password', {
                required: true,

                // minLength: {
                //   value: 8,
                //   message: 'Пароль должен быть больше 8 символов',
                // },
              })}
            />
            <div className="form__error">
              {error && <p>{error}</p>}
              {errors?.email && <p>{errors?.email.message || Error!}</p>}
            </div>
          </div>
          <button
            disabled={loading ? true : false}
            className="form__btn"
            type="submit"
          >
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// async function fetcher(body: any) {
//   console.log('work');

//   const baseUrl =
//     'https://conduit-api-realworld.herokuapp.com/api/users/login';

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   };

//   axios
//     .post(baseUrl, body, config)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log('error:' + error);
//     });
// }
