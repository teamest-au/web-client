import authService from '../services/auth.service';

export function registerGoogleAuthHandlers() {
  // Register Sign Out Action
  authService.addSignOutAction(() => {
    return new Promise((resolve) => {
      const auth2 = (window as any)['gapi'].auth2.getAuthInstance();
      auth2.signOut().then(function () {
        resolve();
      });
    });
  });
  // Register Sign In Action
  (window as any)['onSignIn'] = function (googleUser: any) {
    var profile = googleUser.getBasicProfile();
    authService.handleSignIn({
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl(),
      name: profile.getName(),
      type: 'google',
      token: googleUser.getAuthResponse().id_token,
    });
  };
}
