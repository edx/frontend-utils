import configuration from './configuration';

it('should create a history object', () => {
  const app = {
    config: null,
  };

  configuration(app);

  expect(app.config).toEqual({
    ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
    BASE_URL: 'localhost:1995',
    CREDENTIALS_BASE_URL: 'http://localhost:18150',
    CSRF_COOKIE_NAME: 'csrftoken',
    CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',
    ECOMMERCE_BASE_URL: 'http://localhost:18130',
    ENVIRONMENT: 'test',
    LANGUAGE_PREFERENCE_COOKIE_NAME: 'openedx-language-preference',
    LMS_BASE_URL: 'http://localhost:18000',
    LOGIN_URL: 'http://localhost:18000/login',
    LOGOUT_URL: 'http://localhost:18000/login',
    MARKETING_SITE_BASE_URL: 'http://localhost:18000',
    ORDER_HISTORY_URL: 'localhost:1996/orders',
    REFRESH_ACCESS_TOKEN_ENDPOINT: 'http://localhost:18000/login_refresh',
    SECURE_COOKIES: true,
    SEGMENT_KEY: 'segment_whoa',
    SITE_NAME: 'edX',
    USER_INFO_COOKIE_NAME: 'edx-user-info',
  });
});