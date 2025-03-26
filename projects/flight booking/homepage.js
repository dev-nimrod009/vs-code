import { Clerk } from '@clerk/clerk-js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);

try {
  await clerk.load();

  if (clerk.user) {
    document.getElementById('app').innerHTML = `
      <div id="user-button"></div>
    `;

    const userButtonDiv = document.getElementById('user-button');
    clerk.mountUserButton(userButtonDiv);
  } else {
    document.getElementById('app').innerHTML = `
      <div id="sign-in"></div>
    `;

    const signInDiv = document.getElementById('sign-in');
    clerk.mountSignIn(signInDiv);
  }
} catch (error) {
  console.error('Error loading Clerk:', error);
  document.getElementById('app').innerHTML = `
    <div>Error loading authentication. Please try again later.</div>
  `;
}