import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import querystring from 'querystring';

// eslint-disable-next-line import/prefer-default-export
export async function loginRequest(creds) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  const { data } = await getAuthenticatedHttpClient()
    .post(
      `${getConfig().LMS_BASE_URL}/api/user/v1/account/login_session/`,
      querystring.stringify(creds),
      requestConfig,
    )
    .catch((e) => {
      throw (e);
    });

  return {
    // redirectUrl: data.redirect_url || `${getConfig().LMS_BASE_URL}/dashboard`,
    redirectUrl: "http://app.digitallearningsolution.net",
    success: data.success || false,
  };
}
