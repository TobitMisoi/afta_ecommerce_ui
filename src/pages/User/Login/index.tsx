import { Footer } from '@/components';
import { login } from '@/services/afta/api';
// import { login } from '@/services/AFTA/api';
import { LockOutlined,UserOutlined } from '@ant-design/icons';
import { LoginForm,ProFormCheckbox,ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet,Link,SelectLang,history,useIntl,useModel } from '@umijs/max';
import { Alert,Tabs,message } from 'antd';
import React,{ useState } from 'react';
import { flushSync } from 'react-dom';

const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => {
          return {
            ...s,
            currentUser: {
              name: 'John Doe',
              avatar:
                'https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
              userid: '1',
              email: 'johndoe@mail.com',
              signature: 'TK',
              title: 'Frontend Engineer',
              group: '',
              tags: [],
              notifyCount: 12,
              unreadCount: 11,
              country: 'Kenya',
              access: 'admin',
              geographic: {
                city: {
                  label: 'Nairobi',
                  key: '330100',
                },
              },
              address: 'Nairobi, Kenya',
              phone: '0759267967',
            },
          };
        });
      });
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      //
      console.log(values)

      const msg: any = await login({ ...values });

      if (msg) {
        // jwt token to replace this!
        localStorage.setItem('AFTA_token', msg?.token);
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: 'Login successful',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/product');
        return;
      }
      setUserLoginState({ status: 'error', type: "account" });
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  // https://documenter.getpostman.com/view/22833562/2s946bDvT1
  
  // https://github.com/OkayJosh/afta_commerce
  const { status, type: loginType } = userLoginState;

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          Login | AFTA
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: "1",
          padding: "32px 0",
        }}
      >
        <LoginForm
          action='Dont'
          contentStyle={{
            minWidth: 280,
            maxWidth: "75vw",
          }}
          logo={
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 2.06999V0.0499878C6.99 0.249988 5.16 1.04999 3.68 2.25999L5.1 3.68999C6.21 2.82999 7.54 2.24999 9 2.06999ZM16.32 2.25999C14.84 1.04999 13.01 0.249988 11 0.0499878V2.06999C12.46 2.24999 13.79 2.82999 14.9 3.68999L16.32 2.25999ZM17.93 8.99999H19.95C19.75 6.98999 18.95 5.15999 17.74 3.67999L16.31 5.09999C17.17 6.20999 17.75 7.53999 17.93 8.99999ZM3.69 5.09999L2.26 3.67999C1.05 5.15999 0.250003 6.98999 0.0500031 8.99999H2.07C2.25 7.53999 2.83 6.20999 3.69 5.09999ZM2.07 11H0.0500031C0.250003 13.01 1.05 14.84 2.26 16.32L3.69 14.89C2.83 13.79 2.25 12.46 2.07 11ZM13 9.99999C13 8.33999 11.66 6.99999 10 6.99999C8.34 6.99999 7 8.33999 7 9.99999C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 9.99999ZM16.31 14.9L17.74 16.33C18.95 14.85 19.75 13.01 19.95 11.01H17.93C17.75 12.46 17.17 13.79 16.31 14.9ZM11 17.93V19.95C13.01 19.75 14.84 18.95 16.32 17.74L14.89 16.31C13.79 17.17 12.46 17.75 11 17.93ZM3.68 17.74C5.16 18.95 7 19.75 9 19.95V17.93C7.54 17.75 6.21 17.17 5.1 16.31L3.68 17.74Z'
                fill='#323232'
              />
            </svg>
          }
          subTitle={"Welcome to AFTA"}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: "account",
                label: "Account Login",
              },
            ]}
          />

          {status === "error" && loginType === "account" && (
            <LoginMessage
              content={
                "Error Logging in! Check if username and password is correct"
              }
            />
          )}

          {type === "account" && (
            <>
              <ProFormText
                name='email'
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined />,
                }}
                placeholder={"Email"}
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                ]}
              />
              <ProFormText.Password
                name='password'
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined />,
                }}
                placeholder='Password'
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                  },
                ]}
              />
            </>
          )}
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name='remember_me'>
              Remember me
            </ProFormCheckbox>
            <Link
              to='/user/signup'
              style={{
                float: "right",
              }}
            >
              Don't have an account?
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
